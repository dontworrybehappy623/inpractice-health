# How to Connect Your Forms to Google Sheets

Since this is a static website (no backend server), we can use a free **Google Apps Script** to receive form submissions and save them to a Google Sheet.

Follow these steps:

### 1. Create the Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com) and create a new generic "Blank" sheet.
2. Name it `InPractice Leads`.
3. Rename the first tab (at the bottom) to `Submissions`.
4. Add these headers in the first row:
   - **A1**: `Timestamp`
   - **B1**: `Type` (Clinic vs Partner)
   - **C1**: `Name`
   - **D1**: `Email`
   - **E1**: `Organization` (Clinic Name / Company Name)
   - **F1**: `Details` (EMR / Data Priority)

### 2. Add the Script
1. In your Google Sheet, click **Extensions** > **Apps Script**.
2. Delete any code in the `Code.gs` file and paste the following code:

```javascript
const SHEET_NAME = "Submissions";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // Parse data
    // We expect simple JSON or URL-encoded data. 
    // For simplicity with 'no-cors' requests, we'll try to parse postData.contents
    let data;
    try {
        data = JSON.parse(e.postData.contents);
    } catch(err) {
        data = e.parameter; // Fallback to form-encoded
    }

    const newRow = headers.map(function(header) {
      if (header === 'Timestamp') return new Date();
      // Map our field names to column headers
      switch(header) {
        case 'Type': return data.type || '';
        case 'Name': return data.name || '';
        case 'Email': return data.email || '';
        case 'Organization': return data.organization || data.company || '';
        case 'Details': return data.emr || data.message || '';
        default: return '';
      }
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

3. Click the **Save** icon (disk).

### 3. Deploy the Web App
1. Click the blue **Deploy** button (top right) > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the details:
   - **Description**: `InPractice Form Handler`
   - **Execute as**: `Me` (your email)
   - **Who has access**: `Anyone` (IMPORTANT: This allows your website to send data)
4. Click **Deploy**.
5. You will be asked to **Authorize access**. Click through the warnings (Advanced > Go to Project (unsafe)) since this is your own script.
6. Copy the **Web App URL** provided (it ends in `/exec`).

### 4. Update Your Website
1. Open `script.js`.
2. Find the variable `const GOOGLE_SCRIPT_URL = 'INSERT_YOUR_URL_HERE';` at the top.
3. Paste your Web App URL there.
