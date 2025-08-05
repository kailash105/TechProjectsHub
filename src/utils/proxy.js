// Proxy utility to handle CORS issues with Google Apps Script
export const submitToGoogleSheetsProxy = async (formData) => {
  try {
    // Method 1: Try direct submission first
    const response = await fetch('https://script.google.com/macros/s/AKfycbxWQT3btbSOCGFq4mMtumYKbRPckbh_6ribbXwBOctEwJ3osUWUkuD8yNhzvRjEnermpA/exec', {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // This bypasses CORS but limits response handling
    });

    // Since no-cors doesn't give us response details, we'll assume success
    return { success: true, message: 'Data submitted successfully' };

  } catch (error) {
    console.error('Direct submission failed, trying alternative method:', error);
    
    // Method 2: Use a CORS proxy
    try {
      const corsProxy = 'https://cors-anywhere.herokuapp.com/';
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxWQT3btbSOCGFq4mMtumYKbRPckbh_6ribbXwBOctEwJ3osUWUkuD8yNhzvRjEnermpA/exec';
      
      const response = await fetch(corsProxy + scriptURL, {
        method: 'POST',
        body: formData,
        headers: {
          'Origin': 'http://localhost:5173'
        }
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error('Proxy submission failed');
      }
    } catch (proxyError) {
      console.error('Proxy submission also failed:', proxyError);
      throw proxyError;
    }
  }
}; 