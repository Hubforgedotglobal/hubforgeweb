# EvalAtlas Waitlist - Auto-Update Setup Complete! ✅

## Step 6: Update Your Website Code

Replace the waitlist counter code in `docs/assets/js/main.js` (lines 88-107) with this:

```javascript
  // Waitlist Counter - Auto-Update from Google Sheets
  const GOOGLE_APPS_SCRIPT_URL = 'PASTE_YOUR_WEB_APP_URL_HERE'; // <-- PASTE YOUR URL HERE
  
  // Update all waitlist counters on the page
  const updateWaitlistCount = (count) => {
    const evalatlasCounter = document.getElementById('waitlistCount');
    const homeCounter = document.getElementById('waitlistCountHome');
    
    if (evalatlasCounter) {
      evalatlasCounter.textContent = count;
    }
    
    if (homeCounter) {
      homeCounter.textContent = count;
    }
  };
  
  // Fetch count from Google Sheets
  if (GOOGLE_APPS_SCRIPT_URL && GOOGLE_APPS_SCRIPT_URL !== 'PASTE_YOUR_WEB_APP_URL_HERE') {
    fetch(GOOGLE_APPS_SCRIPT_URL)
      .then(response => response.json())
      .then(data => {
        updateWaitlistCount(data.count);
      })
      .catch(error => {
        console.log('Using fallback count');
        updateWaitlistCount(0); // Fallback if fetch fails
      });
  } else {
    updateWaitlistCount(0); // Default count
  }
```

---

## How to Apply This Update

### Option 1: Paste in Replit (Easiest)
1. Open `docs/assets/js/main.js` in Replit
2. Find lines 88-107 (the waitlist counter code)
3. **Replace** those lines with the code above
4. **Replace** `'PASTE_YOUR_WEB_APP_URL_HERE'` with your actual Web App URL
5. Save the file

### Option 2: I Can Do It For You
Just reply with:
```
Here's my Web App URL: https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxxxx/exec
```

And I'll update the code for you automatically!

---

## Testing

After updating:
1. Hard refresh your website (Ctrl+Shift+R / Cmd+Shift+R)
2. The counter should show the actual number of submissions from your spreadsheet
3. Every time someone submits the Tally form, the counter updates automatically

---

## Important Notes

✅ **Sheet Name**: The script looks for a sheet named "Sheet1". If your Tally data goes to a different sheet name, change `'Sheet1'` in the Apps Script code.

✅ **Header Row**: The script subtracts 1 from the total rows to account for the header row. If you don't have a header, remove the `- 1` in the script.

✅ **Privacy**: The script only returns the count number, not any actual submission data.

✅ **Updates**: The count updates every time someone loads your website (real-time from the spreadsheet).

---

## Troubleshooting

**Counter shows 0 but you have submissions?**
- Check that the sheet name is "Sheet1" or update the script
- Make sure the spreadsheet has data
- Check browser console for errors (F12 → Console tab)

**"Access denied" error?**
- In Apps Script deployment settings, make sure "Who has access" is set to "Anyone"
- Redeploy if needed

**Still stuck?**
- Share your Web App URL with me and I'll test it
- Or share a screenshot of your spreadsheet and I can help debug
