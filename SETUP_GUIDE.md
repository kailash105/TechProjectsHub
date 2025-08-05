# AI-Powered Chatbot Setup Guide

## Quick Start (5 Minutes)

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Copy the Spreadsheet ID from the URL (long string between /d/ and /edit)
4. Create a sheet named "Chatbot Submissions"

### Step 2: Deploy Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Update these values:
   - Replace `YOUR_SPREADSHEET_ID` with your actual spreadsheet ID
   - Replace `your-email@gmail.com` with your email
5. Click "Deploy" → "New deployment"
6. Choose "Web app"
7. Set access to "Anyone"
8. Copy the deployment URL

### Step 3: Update Frontend
1. Open `src/components/Chatbot.jsx`
2. Find line with `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
3. Replace with your Google Apps Script URL
4. Save the file

### Step 4: Test
1. Run `npm run dev`
2. Open your website
3. Click the chat button
4. Complete a test conversation
5. Check your Google Sheet for the data

---

## Detailed Setup Instructions

### Prerequisites
- Google account
- Access to Google Sheets and Google Apps Script
- React development environment

### 1. Google Sheets Setup

#### Create the Spreadsheet
1. Navigate to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Rename it to "TechProjectsHub Chatbot Data"

#### Get the Spreadsheet ID
1. Look at the URL in your browser
2. It will look like: `https://docs.google.com/spreadsheets/d/1ABC123...XYZ/edit`
3. Copy the ID part: `1ABC123...XYZ`

#### Create the Data Sheet
1. In your spreadsheet, rename the first sheet to "Chatbot Submissions"
2. Add these headers in row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Phone
   D1: Email
   E1: Looking For
   F1: Sub Option
   G1: Domain
   H1: Course
   I1: Duration
   J1: IT Solution
   K1: Description
   L1: Submission Timestamp
   ```

### 2. Google Apps Script Setup

#### Create the Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Rename the project to "TechProjectsHub Chatbot"

#### Add the Code
1. Delete the default `myFunction()` code
2. Copy the entire content from `google-apps-script.js`
3. Paste it into the script editor

#### Configure the Script
1. Find this line: `const spreadsheetId = 'YOUR_SPREADSHEET_ID';`
2. Replace `YOUR_SPREADSHEET_ID` with your actual spreadsheet ID
3. Find this line: `const adminEmail = 'your-email@gmail.com';`
4. Replace `your-email@gmail.com` with your email address

#### Deploy the Script
1. Click "Deploy" in the top menu
2. Select "New deployment"
3. Click the gear icon (⚙️) next to "Select type"
4. Choose "Web app"
5. Configure the settings:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
6. Click "Deploy"
7. Click "Authorize access"
8. Choose your Google account
9. Click "Advanced" → "Go to [Project Name] (unsafe)"
10. Click "Allow"
11. Copy the Web app URL

### 3. Frontend Integration

#### Update the Chatbot Component
1. Open `src/components/Chatbot.jsx`
2. Find this line: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your Google Apps Script URL
4. Save the file

#### Verify Integration
1. The chatbot is already imported in `App.jsx`
2. It will appear on all pages as a floating chat button
3. No additional integration needed

### 4. Testing the Setup

#### Test the Complete Flow
1. Start your development server: `npm run dev`
2. Open your website in a browser
3. Look for the floating chat button (bottom-right corner)
4. Click the chat button
5. Follow the conversation:
   - Enter your name
   - Enter a phone number
   - Enter an email address
   - Select "Training"
   - Choose a course (e.g., "Python Full Stack")
   - Select duration (e.g., "2 Months")
6. Check for the success message
7. Verify data appears in your Google Sheet
8. Check your email for the notification

#### Test Different Paths
- **Projects Path**: Select "Projects" → "Project" → "Computer Science"
- **IT Solutions Path**: Select "IT Solutions" → "Frontend Website"

### 5. Troubleshooting

#### Common Issues

**Chatbot not appearing:**
- Check if the component is imported in `App.jsx`
- Verify no console errors
- Ensure the development server is running

**Data not submitting:**
- Verify the Google Apps Script URL is correct
- Check browser console for errors
- Ensure the script is deployed as a web app
- Verify spreadsheet ID is correct

**Email notifications not working:**
- Check the admin email address in the script
- Verify the script has permission to send emails
- Check spam folder

**Google Sheets not updating:**
- Verify the sheet name is "Chatbot Submissions"
- Check that the script has permission to access the spreadsheet
- Verify the spreadsheet ID is correct

#### Debug Steps
1. Open browser Developer Tools (F12)
2. Go to the Network tab
3. Complete a chatbot conversation
4. Look for the POST request to your Google Apps Script
5. Check the response for any errors

### 6. Customization

#### Modify Chatbot Appearance
Edit `src/components/Chatbot.jsx`:
- Change colors in gradient classes
- Modify button styles
- Adjust modal size and position

#### Add New Options
1. Update the options arrays in the chatbot component
2. Add corresponding logic in the `handleUserInput` function
3. Update the Google Apps Script to handle new fields

#### Change Messages
1. Find the message objects in the chatbot component
2. Update the content text
3. Modify the conversation flow as needed

### 7. Production Deployment

#### Build the Application
```bash
npm run build
```

#### Deploy to Hosting
1. Upload the `dist` folder to your web hosting
2. Ensure HTTPS is enabled
3. Test the chatbot on the live site

#### Monitor Performance
1. Check Google Sheets regularly for new submissions
2. Monitor email notifications
3. Track user engagement through browser analytics

---

## Configuration Checklist

- [ ] Google Sheet created with proper headers
- [ ] Spreadsheet ID copied
- [ ] Google Apps Script deployed
- [ ] Script URL copied
- [ ] Admin email configured
- [ ] Frontend scriptURL updated
- [ ] Test conversation completed
- [ ] Data verified in Google Sheets
- [ ] Email notification received
- [ ] Error handling tested
- [ ] Mobile responsiveness checked

---

## Support

If you encounter any issues:

1. **Check the console** for JavaScript errors
2. **Verify URLs** are correct and accessible
3. **Test permissions** for Google Apps Script
4. **Review the documentation** in `CHATBOT_WORKFLOW.md`

For additional help, refer to the troubleshooting section in the main workflow document.

---

*This setup guide provides everything needed to implement the AI-powered chatbot system quickly and efficiently.* 