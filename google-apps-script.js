// Google Apps Script for Chatbot Form Submission
// Deploy this as a web app to handle form submissions from your chatbot

function doPost(e) {
  try {
    // Get the form data
    const formData = e.parameter;
    
    // Get the active spreadsheet (replace with your actual spreadsheet ID)
    const spreadsheetId = '1eKSqc3BHIESoNdKVpZd_yA_rcDI22hvkSBioY4UyWec'; // Replace with your actual spreadsheet ID
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName('Chatbot Submissions'); // Create this sheet in your Google Sheets
    
    // Prepare the data row
    const timestamp = new Date();
    const rowData = [
      timestamp, // Timestamp
      formData.name || '',
      formData.phone || '',
      formData.email || '',
      formData.lookingFor || '',
      formData.subOption || '',
      formData.domain || '',
      formData.course || '',
      formData.duration || '',
      formData.itSolution || '',
      formData.description || '',
      formData.timestamp || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification (optional)
    sendEmailNotification(formData);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');
      
  } catch (error) {
    console.error('Error in doPost:', error);
    
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
}

// Add CORS support for OPTIONS requests
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendEmailNotification(formData) {
  try {
    // Email configuration
    const adminEmail = 'kailashkbc2@gmail.com'; // Replace with your email
    const subject = 'New Chatbot Inquiry - TechProjectsHub';
    
    // Create email body
    let body = 'A new inquiry has been submitted through the chatbot:\n\n';
    body += `Name: ${formData.name || 'Not provided'}\n`;
    body += `Phone: ${formData.phone || 'Not provided'}\n`;
    body += `Email: ${formData.email || 'Not provided'}\n`;
    body += `Looking For: ${formData.lookingFor || 'Not provided'}\n`;
    
    if (formData.subOption) {
      body += `Project Type: ${formData.subOption}\n`;
    }
    
    if (formData.domain) {
      body += `Domain: ${formData.domain}\n`;
    }
    
    if (formData.course) {
      body += `Course: ${formData.course}\n`;
    }
    
    if (formData.duration) {
      body += `Duration: ${formData.duration}\n`;
    }
    
    if (formData.itSolution) {
      body += `IT Solution: ${formData.itSolution}\n`;
    }
    
    if (formData.description) {
      body += `Description: ${formData.description}\n`;
    }
    
    body += `\nTimestamp: ${new Date().toLocaleString()}\n`;
    body += '\nPlease respond within 12 hours as promised.';
    
    // Send email
    MailApp.sendEmail(adminEmail, subject, body);
    
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

function setupSheet() {
  // This function sets up the Google Sheet with proper headers
  // Run this once to create the sheet structure
  
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  
  // Create a new sheet for chatbot submissions
  let sheet = spreadsheet.getSheetByName('Chatbot Submissions');
  
  // If sheet doesn't exist, create it
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Chatbot Submissions');
  }
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name',
    'Phone',
    'Email',
    'Looking For',
    'Sub Option',
    'Domain',
    'Course',
    'Duration',
    'IT Solution',
    'Description',
    'Submission Timestamp'
  ];
  
  // Clear existing content and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground('#4285f4')
    .setFontColor('white')
    .setFontWeight('bold');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  console.log('Sheet setup completed successfully!');
}

function testConnection() {
  // Test function to verify the script is working
  return ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Google Apps Script is working correctly',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
} 