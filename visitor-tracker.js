/**
 * Visitor Tracker with Telegram Notifications
 * Sends a Telegram message when someone visits the resume
 */

(function() {
    // Telegram Bot Configuration
    const BOT_TOKEN = '8593678914:AAG2rlnXL3SE_HfGpjuK6NGpNRM-Lgl7Pmk';
    const CHAT_ID = '6086511173';
    
    // Prevent duplicate notifications on page refresh
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
    
    // Format message
    const message = `
🎯 *Resume Visitor Alert!*

📅 *Time:* ${new Date().toLocaleString()}
🌐 *Source:* ${visitorInfo.referrer}
💻 *Platform:* ${visitorInfo.platform}
📱 *Screen:* ${visitorInfo.screenSize}
🗣️ *Language:* ${visitorInfo.language}

🔗 *Page:* ${visitorInfo.page}

Someone is checking out your resume!
    `;
    
    // Send Telegram notification
    // Using a CORS proxy for GitHub Pages (since we can't make direct API calls)
    // Alternative: Use a serverless function or backend service
    
    // Method 1: Using a simple webhook service (recommended for production)
    // You can set up a simple webhook on Vercel, Netlify Functions, or your own server
    
    // Method 2: Using Formspree (free tier available)
    // Sign up at formspree.io and replace with your form ID
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
    
    // Send to Vercel API endpoint
    const API_ENDPOINT = window.location.hostname.includes('vercel.app') 
        ? '/api/notify' 
        : 'https://ai-resume-api.vercel.app/api/notify'; // Fallback to custom domain
    
    fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: message,
            visitor: visitorInfo
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('✅ Telegram notification sent');
        } else {
            console.log('⚠️ Notification failed, logged to console');
        }
    })
    .catch(err => {
        console.log('Visitor tracked (offline mode):', visitorInfo);
    });
    
    // Backup: Log to console
    console.log('Visitor tracked:', visitorInfo);
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            token: BOT_TOKEN,
            chat_id: CHAT_ID,
            message: message,
            visitor: visitorInfo
        })
    }).catch(err => console.error('Notification failed:', err));
    */
    
    // Mark as notified
    sessionStorage.setItem('visitorNotified', 'true');
    
    // Optional: Track page engagement time
    let engagementTime = 0;
    const engagementInterval = setInterval(() => {
        engagementTime += 1;
    }, 1000);
    
    // Send engagement time when user leaves
    window.addEventListener('beforeunload', () => {
        clearInterval(engagementInterval);
        console.log(`Visitor engagement time: ${engagementTime}s`);
        
        // You could send this to your backend as well
    });
})();
