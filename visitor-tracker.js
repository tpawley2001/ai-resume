/**
 * Visitor Tracker
 *
 * Counts page views via GoatCounter. There is deliberately no credential in
 * this file -- it is a public static site, so anything stored here is public.
 * The site code below is a write-only endpoint, not a secret.
 *
 * To activate:
 *   1. Sign up at https://www.goatcounter.com (free) and pick a code,
 *      e.g. "tpawley" -> https://tpawley.goatcounter.com
 *   2. Put that code in GOATCOUNTER_CODE below
 *   3. View stats at https://<code>.goatcounter.com
 *
 * Until a code is set, this file only logs to the browser console.
 */

(function() {
    const GOATCOUNTER_CODE = '';  // <-- your goatcounter subdomain, e.g. 'tpawley'

    const visitorInfo = {
        timestamp: new Date().toISOString(),
        language: navigator.language,
        platform: navigator.platform,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct',
        page: window.location.href
    };

    console.log('📊 Visitor:', visitorInfo);

    if (GOATCOUNTER_CODE) {
        window.goatcounter = { path: location.pathname + location.search };
        const s = document.createElement('script');
        s.src = 'https://gc.zgo.at/count.js';
        s.async = true;
        s.setAttribute('data-goatcounter', `https://${GOATCOUNTER_CODE}.goatcounter.com/count`);
        document.head.appendChild(s);
    } else {
        console.log('ℹ️ Analytics not configured -- set GOATCOUNTER_CODE in visitor-tracker.js');
    }

    // Track page engagement time
    let engagementTime = 0;
    const engagementInterval = setInterval(() => {
        engagementTime += 1;
    }, 1000);

    window.addEventListener('beforeunload', () => {
        clearInterval(engagementInterval);
        console.log(`Visitor engagement time: ${engagementTime}s`);
    });
})();
