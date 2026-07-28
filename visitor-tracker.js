/**
 * Visitor Tracker with Telegram Notifications
 * Sends a Telegram message when someone opens the resume.
 *
 * NOTE: this is a static site (GitHub Pages), so the bot token below is
 * visible to anyone who views source. Use a bot dedicated to this page --
 * never one that also handles private chats. To swap bots:
 *   1. Talk to @BotFather -> /newbot
 *   2. Message the new bot once, then open
 *      https://api.telegram.org/bot<TOKEN>/getUpdates to read your chat id
 *   3. Replace BOT_TOKEN and CHAT_ID below
 */

(function() {
    // Telegram Configuration
    // @tsn_resume_bot -- dedicated to this page only
    const BOT_TOKEN = 'REDACTED_TELEGRAM_BOT_TOKEN';
    const CHAT_ID = '6086511173';
    const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

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
    const message = `🎯 *Resume Visitor Alert!*

📅 Time: ${new Date().toLocaleString()}
🌐 Source: ${visitorInfo.referrer}
💻 Platform: ${visitorInfo.platform}
📱 Screen: ${visitorInfo.screenSize}
🗣️ Language: ${visitorInfo.language}

🔗 Page: ${visitorInfo.page}

Someone is checking out your resume!`;

    // Log to console (always works)
    console.log('📊 Visitor tracked:', visitorInfo);

    // Send to Telegram
    fetch(TELEGRAM_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
            disable_web_page_preview: true
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('✅ Telegram notification sent');
        } else {
            console.log('⚠️ Telegram notification failed:', data.description);
        }
    })
    .catch(err => {
        console.log('Visitor tracked (Telegram error):', err);
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
