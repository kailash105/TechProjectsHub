// Improved Google Apps Script with better CORS handling
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Script is working!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function doPost(e) {
  try {
    // Get the form data
    const formData = e.parameter;
    
    // Get the active spreadsheet
    const spreadsheetId = '1eKSqc3BHIESoNdKVpZd_yA_rcDI22hvkSBioY4UyWec';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName('Chatbot Submissions');
    
    // Prepare the data row
    const timestamp = new Date();
    const rowData = [
      timestamp,
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
    
    // Send email notification
    sendEmailNotification(formData);
    
    // Return success response with proper CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data submitted successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type')
      .setHeader('Access-Control-Max-Age', '86400');
      
  } catch (error) {
    console.error('Error in doPost:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type')
      .setHeader('Access-Control-Max-Age', '86400');
  }
}

function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
}

function sendEmailNotification(formData) {
  try {
    const adminEmail = 'kailashkbc2@gmail.com';
    const subject = 'New Chatbot Inquiry - TechProjectsHub';
    
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
    
    MailApp.sendEmail(adminEmail, subject, body);
    
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Test function to verify the script is working
function testConnection() {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Google Apps Script is working correctly',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*');
} 