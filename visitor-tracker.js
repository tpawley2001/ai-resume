/**
 * Visitor Tracker with Formspree Notifications
 * Sends email notification when someone visits the resume
 */

(function() {
    // Formspree Configuration
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdjkapj';
    
    // Prevent duplicate notifications on page refresh
    if (sessionStorage.getItem('visitorNotified')) {
        return;
    }
    
    // Get visitor email from splash page
    const visitorEmail = localStorage.getItem('visitorEmail') || 'Unknown';
    
    // Get visitor info
    const visitorInfo = {
        timestamp: new Date().toISOString(),
        email: visitorEmail,
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct',
        page: window.location.href
    };
    
    // Format message
    const message = `
🎯 Resume Visitor Alert!

👤 Visitor: ${visitorEmail}
📅 Time: ${new Date().toLocaleString()}
🌐 Source: ${visitorInfo.referrer}
💻 Platform: ${visitorInfo.platform}
📱 Screen: ${visitorInfo.screenSize}
🗣️ Language: ${visitorInfo.language}

🔗 Page: ${visitorInfo.page}

Someone is checking out your resume!
    `;
    
    // Log to console (always works)
    console.log('📊 Visitor tracked:', visitorInfo);
    
    // Send to Formspree for email notification
    fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            message: message,
            visitor: visitorInfo,
            _subject: '🎯 Resume Visitor Alert!',
            email: 'visitor@resume.ai'
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('✅ Email notification sent via Formspree');
        } else {
            console.log('⚠️ Formspree notification failed, logged to console');
        }
    })
    .catch(err => {
        console.log('Visitor tracked (Formspree error):', visitorInfo);
    });
    
    // Mark as notified
    sessionStorage.setItem('visitorNotified', 'true');
    
    // Track page engagement time
    let engagementTime = 0;
    const engagementInterval = setInterval(() => {
        engagementTime += 1;
    }, 1000);
    
    // Log engagement time when user leaves
    window.addEventListener('beforeunload', () => {
        clearInterval(engagementInterval);
        console.log(`Visitor engagement time: ${engagementTime}s`);
    });
})();
