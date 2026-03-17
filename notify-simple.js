/**
 * Simple Visitor Notification using EmailJS
 * No server required - works directly from browser
 * 
 * To set up:
 * 1. Go to https://www.emailjs.com/
 * 2. Sign up with tpawley2001@gmail.com
 * 3. Create a service (Gmail)
 * 4. Create an email template
 * 5. Get your Public Key, Service ID, and Template ID
 * 6. Update the values below
 */

(function() {
    // EmailJS Configuration
    // Replace these with your actual values from EmailJS dashboard
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    
    // Prevent duplicate notifications
    if (sessionStorage.getItem('visitorNotified')) {
        return;
    }
    
    // Get visitor info
    const visitorInfo = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct',
        page: window.location.href
    };
    
    // Log to console (always works)
    console.log('📊 Visitor tracked:', visitorInfo);
    
    // If EmailJS is not configured, just log to console
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        console.log('ℹ️ EmailJS not configured. Add your keys to enable email notifications.');
        sessionStorage.setItem('visitorNotified', 'true');
        return;
    }
    
    // Load EmailJS SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = function() {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        
        // Send notification
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email: 'tpawley2001@gmail.com',
            subject: '🎯 Resume Visitor Alert!',
            message: `New visitor on your AI resume!`,
            timestamp: new Date().toLocaleString(),
            page: visitorInfo.page,
            referrer: visitorInfo.referrer,
            platform: visitorInfo.platform,
            screen: visitorInfo.screenSize,
            language: visitorInfo.language
        }).then(
            function(response) {
                console.log('✅ Notification sent:', response);
                sessionStorage.setItem('visitorNotified', 'true');
            },
            function(error) {
                console.log('⚠️ Notification failed:', error);
            }
        );
    };
    document.head.appendChild(script);
})();
