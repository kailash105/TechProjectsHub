# Quick Google Sheets Setup Guide

## 🚀 Get Your Chatbot Data to Google Sheets in 5 Minutes

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Copy the Spreadsheet ID from URL:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123...XYZ/edit
   ↑ Copy this part ↑
   ```
4. Rename the first sheet to "Chatbot Submissions"

### Step 2: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the entire code from `google-apps-script.js`
5. Update these lines:
   ```javascript
   const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // ← Paste your spreadsheet ID here
   const adminEmail = 'your-email@gmail.com'; // ← Your email here
   ```

### Step 3: Deploy Script
1. Click "Deploy" → "New deployment"
2. Click the gear icon ⚙️ → "Web app"
3. Set:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. Click "Authorize access"
6. Choose your Google account
7. Click "Advanced" → "Go to [Project Name] (unsafe)"
8. Click "Allow"
9. **Copy the Web app URL** (looks like: `https://script.google.com/macros/s/1ABC123...XYZ/exec`)

### Step 4: Update Your Code
1. Open `src/components/Chatbot.jsx`
2. Find this line:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the URL

### Step 5: Test
1. Run your website: `npm run dev`
2. Click the AI bot button
3. Complete a test conversation
4. Check your Google Sheet for the data
5. Check your email for the notification

## 📊 Data Structure in Google Sheets

Your data will appear in these columns:
- **A**: Timestamp
- **B**: Name
- **C**: Phone
- **D**: Email
- **E**: Looking For
- **F**: Sub Option
- **G**: Domain
- **H**: Course
- **I**: Duration
- **J**: IT Solution
- **K**: Description
- **L**: Submission Timestamp

## 🔧 Troubleshooting

### If data doesn't appear:
1. Check the script URL is correct
2. Verify spreadsheet ID is correct
3. Check browser console for errors
4. Ensure script is deployed as web app

### If you get errors:
1. Make sure you authorized the script
2. Check the sheet name is exactly "Chatbot Submissions"
3. Verify your email address is correct

## 📧 Email Notifications

You'll receive emails like this:
```
Subject: New Chatbot Inquiry - TechProjectsHub

A new inquiry has been submitted through the chatbot:

Name: John Doe
Phone: +1234567890
Email: john@example.com
Looking For: Training
Course: Python Full Stack
Duration: 2 Months

Timestamp: 8/2/2024, 8:06:45 PM

Please respond within 12 hours as promised.
```

## ✅ Success Checklist

- [ ] Google Sheet created with "Chatbot Submissions" sheet
- [ ] Spreadsheet ID copied
- [ ] Google Apps Script deployed
- [ ] Script URL copied
- [ ] Frontend code updated
- [ ] Test conversation completed
- [ ] Data appears in Google Sheets
- [ ] Email notification received

---

**Need help?** Check the browser console (F12) for any error messages and verify all URLs are correct. 