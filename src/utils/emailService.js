// Email service for handling consultation requests and other email functionalities

export const sendConsultationEmail = async (formData) => {
  try {
    // In a real application, this would send to your backend API
    // For now, we'll simulate the email sending process
    
    const emailData = {
      to: 'contact@techprojectshub.com', // Your business email
      from: formData.email,
      subject: `New Consultation Request - ${formData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Consultation Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">TechProjectsHub IT Solutions</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333; margin-bottom: 20px;">Client Information</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Name:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Email:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Phone:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.phone}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Service Interest:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.service}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Preferred Date:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.date}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Preferred Time:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.time}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Project Details:</strong>
              <p style="color: #333; margin: 10px 0 0 0; line-height: 1.6;">${formData.message}</p>
            </div>
            
            <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
              <h3 style="color: #333; margin: 0 0 10px 0;">Next Steps</h3>
              <p style="color: #555; margin: 0; line-height: 1.6;">
                Our team will review your request and contact you within 24 hours to schedule your consultation. 
                We'll discuss your project requirements in detail and provide a customized solution proposal.
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              © 2024 TechProjectsHub. All rights reserved.
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">
              This email was sent from our consultation form on techprojectshub.com
            </p>
          </div>
        </div>
      `
    };

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, you would make an actual API call here:
    // const response = await fetch('/api/send-consultation-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailData)
    // });
    
    console.log('Consultation email data:', emailData);
    
    return {
      success: true,
      message: 'Consultation request sent successfully! We\'ll contact you within 24 hours.'
    };
    
  } catch (error) {
    console.error('Error sending consultation email:', error);
    return {
      success: false,
      message: 'Failed to send consultation request. Please try again or contact us directly.'
    };
  }
};

export const sendContactEmail = async (formData) => {
  try {
    const emailData = {
      to: 'contact@techprojectshub.com',
      from: formData.email,
      subject: `New Contact Form Submission - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">TechProjectsHub</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333; margin-bottom: 20px;">Contact Information</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Name:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Email:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Subject:</strong>
              <span style="color: #333; margin-left: 10px;">${formData.subject}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Message:</strong>
              <p style="color: #333; margin: 10px 0 0 0; line-height: 1.6;">${formData.message}</p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              © 2024 TechProjectsHub. All rights reserved.
            </p>
          </div>
        </div>
      `
    };

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact email data:', emailData);
    
    return {
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    };
    
  } catch (error) {
    console.error('Error sending contact email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.'
    };
  }
};
