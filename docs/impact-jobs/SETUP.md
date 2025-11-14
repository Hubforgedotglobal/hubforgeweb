# Impact Jobs Hub - Setup Guide

This guide will help you connect your Impact Jobs Hub to Tally.so and Google Sheets for automatic job posting.

## Overview

The Impact Jobs Hub uses:
1. **Tally.so** - Free form builder for job submissions
2. **Google Sheets** - Database to store job postings
3. **Google Apps Script** - API to serve jobs to your website

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Impact Jobs Hub"
3. In the first sheet, add these column headers in row 1:

| Column | Header Name | Description |
|--------|-------------|-------------|
| A | Timestamp | Auto-filled by Tally |
| B | Job Title | Title of the position |
| C | Organization | Company/org name |
| D | Location | City, Country or "Remote" |
| E | Job Type | Full-time, Part-time, Contract, Volunteer, Internship |
| F | Category | M&E, Research, Tech, Program Management, Other |
| G | Description | Job description (max 500 chars recommended) |
| H | Apply URL | Link to application page |
| I | Contact Email | Contact person email |
| J | Logo URL | Link to uploaded logo (auto from Tally) |
| K | Expiration | 1 month, 2 months, 3 months, 6 months |

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete the default code
3. Copy and paste the Apps Script code below
4. Click **Deploy** > **New deployment**
5. Select type: **Web app**
6. Settings:
   - Description: "Impact Jobs Hub API"
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy** and authorize the app
8. **Copy the Web App URL** - you'll need this!

## Apps Script Code

```javascript
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Skip header row
  const headers = data[0];
  const rows = data.slice(1);
  
  const jobs = rows
    .map(row => {
      const job = {};
      headers.forEach((header, index) => {
        job[header] = row[index];
      });
      return job;
    })
    .filter(job => {
      // Filter out empty rows
      if (!job['Job Title']) return false;
      
      // Calculate expiration date
      const postedDate = new Date(job['Timestamp']);
      const expirationMonths = parseInt(job['Expiration']?.split(' ')[0]) || 3;
      const expiresAt = new Date(postedDate);
      expiresAt.setMonth(expiresAt.getMonth() + expirationMonths);
      
      // Check if job is still active
      const now = new Date();
      if (now > expiresAt) return false;
      
      return true;
    })
    .map(job => {
      // Calculate dates
      const postedDate = new Date(job['Timestamp']);
      const expirationMonths = parseInt(job['Expiration']?.split(' ')[0]) || 3;
      const expiresAt = new Date(postedDate);
      expiresAt.setMonth(expiresAt.getMonth() + expirationMonths);
      
      return {
        title: job['Job Title'],
        organization: job['Organization'],
        location: job['Location'],
        type: job['Job Type'],
        category: job['Category'],
        description: job['Description'],
        applyUrl: job['Apply URL'],
        contactEmail: job['Contact Email'],
        logoUrl: job['Logo URL'] || '',
        postedAt: postedDate.toISOString(),
        expiresAt: expiresAt.toISOString()
      };
    })
    .reverse(); // Show newest first
  
  return ContentService.createTextOutput(JSON.stringify({ jobs: jobs }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Create Tally.so Form

1. Go to [Tally.so](https://tally.so) and create a free account
2. Create a new form: "Post a Job - Impact Jobs Hub"
3. Add these form fields:

### Form Fields

**Job Title** (Short text)
- Required: Yes
- Placeholder: "e.g., Senior M&E Specialist"

**Organization** (Short text)
- Required: Yes
- Placeholder: "Your organization name"

**Location** (Short text)
- Required: Yes
- Placeholder: "City, Country or 'Remote'"

**Job Type** (Dropdown)
- Required: Yes
- Options:
  - Full-time
  - Part-time
  - Contract
  - Volunteer
  - Internship

**Category** (Dropdown)
- Required: Yes
- Options:
  - M&E
  - Research
  - Tech
  - Program Management
  - Other

**Job Description** (Long text)
- Required: Yes
- Placeholder: "Brief description of the role, responsibilities, and requirements"
- Max length: 1000 characters

**Application URL** (URL)
- Required: Yes
- Placeholder: "https://your-org.com/careers/job-id"

**Contact Email** (Email)
- Required: Yes
- Placeholder: "hiring@your-org.com"

**Organization Logo** (File upload)
- Required: No
- Allowed types: Images only
- Max size: 5MB
- Help text: "Upload your organization's logo (square format recommended)"

**Job Expires In** (Dropdown)
- Required: Yes
- Default: 3 months
- Options:
  - 1 month
  - 2 months
  - 3 months
  - 6 months

### Form Settings

4. Go to **Integrations** in Tally
5. Select **Google Sheets**
6. Connect to your "Impact Jobs Hub" spreadsheet
7. Map fields to columns (they should auto-map by name)
8. Enable "Submit new responses"
9. **Copy your Tally form URL**

## Step 4: Update Website Configuration

1. Open `docs/impact-jobs/index.html`
2. Find these lines near the top of the script section:

```javascript
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
const TALLY_FORM_URL = 'YOUR_TALLY_FORM_URL_HERE';
```

3. Replace with your actual URLs:

```javascript
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const TALLY_FORM_URL = 'https://tally.so/r/YOUR_FORM_ID';
```

4. Save the file

## Step 5: Test It!

1. Submit a test job through your Tally form
2. Check that it appears in your Google Sheet
3. Visit your Impact Jobs Hub page
4. The job should appear within a few seconds!

## Tips

- **Logo hosting**: Tally automatically uploads files to Google Drive and provides a URL
- **Auto-expiration**: Jobs automatically disappear after their expiration date
- **No moderation**: Jobs auto-publish immediately (you can add a "Status" column later for moderation if needed)
- **Free forever**: Tally.so and Google Apps Script are free for unlimited submissions

## Troubleshooting

**Jobs not showing?**
- Check the Apps Script URL is correct
- Make sure the script is deployed as "Anyone" can access
- Check browser console for errors

**Form not submitting to Sheet?**
- Verify Tally integration is active
- Check column mapping in Tally

**Logo not displaying?**
- Ensure logo file is shared publicly in Google Drive
- Check the URL is direct image link (should end in file extension)

## Future Enhancements

You can add these later if needed:
- **Moderation**: Add "Status" column (Pending/Approved) and filter in Apps Script
- **Edit/Delete**: Add unique ID and create edit links
- **View counter**: Track clicks per job
- **Email alerts**: Notify subscribers of new jobs in their category

---

**Questions?** This is a simple, reliable setup that requires zero maintenance once configured!
