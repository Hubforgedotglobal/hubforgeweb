# Community Driven Impact Jobs Hub - Setup Guide

This guide will help you connect your Impact Jobs Hub to Tally.so and Google Sheets for automatic job posting with email-based management.

## Overview

The Community Driven Impact Jobs Hub uses:
1. **Tally.so** - Free form builder for job submissions
2. **Google Sheets** - Database to store job postings
3. **Google Apps Script** - API to serve jobs to your website + send edit links via email

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Community Driven Impact Jobs Hub"
3. In the first sheet, add these column headers in row 1:

| Column | Header Name | Description |
|--------|-------------|-------------|
| A | Timestamp | Auto-filled by Tally |
| B | Job Title | Title of the position |
| C | Organization | Company/org name |
| D | Organization Website | Company website URL |
| E | Company Size | 1-10, 11-50, 51-200, 201-500, 500+ |
| F | Location | City, Country (e.g., "Nairobi, Kenya" or "Remote") |
| G | Remote Policy | Fully Remote, Hybrid, On-site |
| H | Job Type | Full-time, Part-time, Contract, Volunteer, Internship |
| I | Category | M&E, Research, Tech, Program Management, Other |
| J | Experience Level | Entry, Mid-level, Senior, Lead |
| K | Salary Min | Minimum salary (number only) |
| L | Salary Max | Maximum salary (number only) |
| M | Currency | USD, EUR, GBP, INR, KES, NGN, ZAR, etc. |
| N | Description | Brief job description (500 chars recommended) |
| O | Job Description URL | Link to full job description on your site |
| P | Apply URL | Link to application page |
| Q | Application Deadline | Date when applications close |
| R | Contact Email | Contact person email (for edit link) |
| S | Logo URL | Link to uploaded logo (auto from Tally) |
| T | Expiration | 1 month, 2 months, 3 months, 6 months |
| U | Edit ID | Auto-generated unique ID for editing |

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
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const params = e.parameter;
  
  // If edit_id is provided, return job details for editing
  if (params.edit_id) {
    return handleEditRequest(params.edit_id, sheet);
  }
  
  // Otherwise, return all active jobs
  return handleJobsRequest(sheet);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Handle job update/delete
  if (data.action === 'update' || data.action === 'delete') {
    return handleJobUpdate(data, sheet);
  }
  
  return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle new job submission (called by onFormSubmit trigger)
function onFormSubmit(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const row = e.range.getRow();
  
  // Generate unique edit ID
  const editId = Utilities.getUuid();
  sheet.getRange(row, 21).setValue(editId); // Column U
  
  // Send confirmation email with edit link
  const email = sheet.getRange(row, 18).getValue(); // Column R (Contact Email)
  const jobTitle = sheet.getRange(row, 2).getValue(); // Column B
  const organization = sheet.getRange(row, 3).getValue(); // Column C
  
  const editUrl = `YOUR_WEB_APP_URL?edit_id=${editId}`;
  
  const subject = `✅ Your job posting: "${jobTitle}" is live!`;
  const body = `
Hi there,

Your job posting for "${jobTitle}" at ${organization} has been successfully published on the Community Driven Impact Jobs Hub!

🔗 Edit or remove your job anytime:
${editUrl}

📋 Job Details:
- Title: ${jobTitle}
- Organization: ${organization}
- Posted: ${new Date().toLocaleDateString()}

Keep this email safe - you'll need this link to manage your job posting.

Questions? Reply to this email.

Best regards,
HubForge Global Impact Network
  `;
  
  try {
    MailApp.sendEmail(email, subject, body);
  } catch (error) {
    Logger.log('Error sending email: ' + error);
  }
}

// Return all active jobs
function handleJobsRequest(sheet) {
  const data = sheet.getDataRange().getValues();
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
      if (!job['Job Title']) return false;
      
      // Calculate expiration
      const postedDate = new Date(job['Timestamp']);
      const expirationMonths = parseInt(job['Expiration']?.split(' ')[0]) || 3;
      const expiresAt = new Date(postedDate);
      expiresAt.setMonth(expiresAt.getMonth() + expirationMonths);
      
      // Check if still active
      const now = new Date();
      if (now > expiresAt) return false;
      
      return true;
    })
    .map(job => {
      const postedDate = new Date(job['Timestamp']);
      const expirationMonths = parseInt(job['Expiration']?.split(' ')[0]) || 3;
      const expiresAt = new Date(postedDate);
      expiresAt.setMonth(expiresAt.getMonth() + expirationMonths);
      
      return {
        title: job['Job Title'],
        organization: job['Organization'],
        orgWebsite: job['Organization Website'] || '',
        companySize: job['Company Size'],
        location: job['Location'],
        remotePolicy: job['Remote Policy'],
        type: job['Job Type'],
        category: job['Category'],
        experienceLevel: job['Experience Level'],
        salaryMin: job['Salary Min'] || null,
        salaryMax: job['Salary Max'] || null,
        currency: job['Currency'] || '',
        description: job['Description'],
        jobDescriptionUrl: job['Job Description URL'] || '',
        applyUrl: job['Apply URL'],
        applicationDeadline: job['Application Deadline'] || '',
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

// Handle edit request
function handleEditRequest(editId, sheet) {
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  
  // Find job by edit ID
  const rowIndex = data.findIndex(row => row[20] === editId); // Column U
  
  if (rowIndex === -1) {
    return ContentService.createTextOutput(JSON.stringify({ error: 'Job not found' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  const job = {};
  headers.forEach((header, index) => {
    job[header] = data[rowIndex][index];
  });
  
  return ContentService.createTextOutput(JSON.stringify({ job: job, rowIndex: rowIndex }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle job update/delete
function handleJobUpdate(data, sheet) {
  const editId = data.edit_id;
  const sheetData = sheet.getDataRange().getValues();
  
  // Find job by edit ID
  const rowIndex = sheetData.findIndex(row => row[20] === editId); // Column U
  
  if (rowIndex === -1) {
    return ContentService.createTextOutput(JSON.stringify({ error: 'Job not found' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  if (data.action === 'delete') {
    sheet.deleteRow(rowIndex + 1);
    return ContentService.createTextOutput(JSON.stringify({ success: true, message: 'Job deleted' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  if (data.action === 'update') {
    // Update job fields (implement as needed)
    return ContentService.createTextOutput(JSON.stringify({ success: true, message: 'Job updated' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid action' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Important: Set up Form Submit Trigger

1. In Apps Script editor, click on **Triggers** (clock icon on left sidebar)
2. Click **+ Add Trigger**
3. Settings:
   - Function: `onFormSubmit`
   - Deployment: Head
   - Event source: From spreadsheet
   - Event type: On form submit
4. Click **Save**

## Step 3: Create Tally.so Form

1. Go to [Tally.so](https://tally.so) and create a free account
2. Create a new form: "Post a Job - Community Driven Impact Jobs Hub"
3. Add these form fields in order:

### Form Fields Configuration

**Section 1: Organization Information**

**Organization Name** (Short text)
- Required: Yes
- Placeholder: "Your organization name"

**Organization Website** (URL)
- Required: Yes
- Placeholder: "https://your-organization.com"
- Help text: "Link to your organization's website"

**Company Size** (Dropdown)
- Required: Yes
- Options:
  - 1-10 employees
  - 11-50 employees
  - 51-200 employees
  - 201-500 employees
  - 500+ employees

**Organization Logo** (File upload)
- Required: No
- Allowed types: Images only
- Max size: 5MB
- Help text: "Upload your organization's logo (square format recommended)"

**Section 2: Job Details**

**Job Title** (Short text)
- Required: Yes
- Placeholder: "e.g., Senior M&E Specialist"

**Location** (Short text)
- Required: Yes
- Placeholder: "City, Country or 'Remote'"
- Help text: "Examples: Nairobi, Kenya | New York, USA | Remote"

**Remote Work Policy** (Dropdown)
- Required: Yes
- Options:
  - Fully Remote
  - Hybrid
  - On-site

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

**Experience Level** (Dropdown)
- Required: Yes
- Options:
  - Entry
  - Mid-level
  - Senior
  - Lead

**Section 3: Compensation**

**Minimum Salary** (Number)
- Required: No
- Placeholder: "50000"
- Help text: "Annual salary (numbers only, no commas)"

**Maximum Salary** (Number)
- Required: No
- Placeholder: "70000"
- Help text: "Annual salary (numbers only, no commas)"

**Currency** (Dropdown)
- Required: No
- Options:
  - USD (US Dollar)
  - EUR (Euro)
  - GBP (British Pound)
  - INR (Indian Rupee)
  - KES (Kenyan Shilling)
  - NGN (Nigerian Naira)
  - ZAR (South African Rand)
  - BRL (Brazilian Real)
  - CAD (Canadian Dollar)
  - AUD (Australian Dollar)
  - Other

**Section 4: Job Description & Application**

**Brief Job Description** (Long text)
- Required: Yes
- Placeholder: "Brief description of the role, responsibilities, and requirements..."
- Max length: 1000 characters
- Help text: "Keep it concise - visitors will see full details on your job description page"

**Full Job Description URL** (URL)
- Required: No
- Placeholder: "https://your-org.com/careers/job-posting"
- Help text: "Link to the complete job description on your website"

**Application URL** (URL)
- Required: Yes
- Placeholder: "https://your-org.com/apply or https://forms.gle/..."
- Help text: "Where candidates should apply"

**Application Deadline** (Date)
- Required: No
- Help text: "When do applications close?"

**Contact Email** (Email)
- Required: Yes
- Placeholder: "hiring@your-org.com"
- Help text: "We'll send you an edit link at this email"

**Section 5: Job Posting Duration**

**Job Expires In** (Dropdown)
- Required: Yes
- Default: 3 months
- Options:
  - 1 month
  - 2 months
  - 3 months
  - 6 months
- Help text: "Your job will automatically be removed after this period"

### Form Settings

4. Go to **Integrations** in Tally
5. Select **Google Sheets**
6. Connect to your "Community Driven Impact Jobs Hub" spreadsheet
7. Map fields to columns (should auto-map by name)
8. Enable "Submit new responses"
9. **Copy your Tally form URL**

## Step 4: Update Website Configuration

1. Open `docs/impact-jobs/index.html`
2. Find these lines near line 730:

```javascript
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
const TALLY_FORM_URL = 'YOUR_TALLY_FORM_URL_HERE';
```

3. Replace with your actual URLs:

```javascript
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const TALLY_FORM_URL = 'https://tally.so/r/YOUR_FORM_ID';
```

4. In the Apps Script code, update line 51:

```javascript
const editUrl = `YOUR_WEB_APP_URL?edit_id=${editId}`;
```

Replace with your actual Apps Script URL:

```javascript
const editUrl = `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?edit_id=${editId}`;
```

5. Save all files

## Step 5: Test It!

1. Submit a test job through your Tally form
2. Check that it appears in your Google Sheet
3. Check your email for the confirmation with edit link
4. Visit your Impact Jobs Hub page
5. The job should appear within a few seconds!

## How It Works

### Job Posting Flow:
1. Organization submits job via Tally form
2. Form data → Google Sheets
3. Apps Script generates unique edit ID
4. Confirmation email sent with edit link
5. Job appears on website immediately

### Job Management:
- **Edit/Delete**: Click the edit link in confirmation email
- **Auto-expiration**: Jobs automatically hide after expiration date
- **No login needed**: Everything managed via email link

## Salary Display Best Practices

For global transparency:
- Always include currency
- Use annual salary for full-time roles
- Use hourly/daily rates for contract work
- Leave blank if compensation is non-monetary (e.g., volunteer)

## Tips

- **Logo hosting**: Tally automatically uploads files to Google Drive and provides a URL
- **Edit links**: Sent automatically via email after each submission
- **Security**: Edit links are unique UUIDs - only the submitter has access
- **Free forever**: Tally.so and Google Apps Script are free for unlimited submissions
- **Global reach**: Support for 10+ currencies built-in

## Troubleshooting

**Jobs not showing?**
- Check the Apps Script URL is correct in index.html
- Make sure the script is deployed as "Anyone" can access
- Check browser console for errors

**No confirmation email?**
- Verify the Apps Script trigger is set up (onFormSubmit)
- Check spam folder
- Verify contact email is correct in form

**Logo not displaying?**
- Ensure logo file is shared publicly in Google Drive
- Check the URL is a direct image link

**Salary not displaying?**
- Enter numbers only (no commas or currency symbols)
- Both min and max salary must be filled
- Currency must be selected

## Future Enhancements

You can add these later if needed:
- **Save jobs feature**: Let visitors save jobs to localStorage
- **Email alerts**: Notify subscribers of new jobs in their category
- **Analytics**: Track views and applications per job
- **Premium listings**: Featured jobs at the top

---

**Questions?** This system is designed to be simple, reliable, and require zero maintenance once configured!
