import React, { useState, useEffect } from 'react';

function CookieConsent() {
    const [acceptedCookies, setAcceptedCookies] = useState(() => {
        return localStorage.getItem('cookiesAccepted') === 'true';
    });

    useEffect(() => {
        if (acceptedCookies) {
            document.getElementById('cookie-consent-banner').style.display = 'none';
        }
    }, [acceptedCookies]);

    function acceptCookies() {
        setAcceptedCookies(true);
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookie-consent-banner').style.display = 'none';
    }

    function rejectCookies() {
        setAcceptedCookies(false);
        localStorage.setItem('cookiesAccepted', 'false');
        document.getElementById('cookie-consent-banner').style.display = 'none';
    }

    if (!acceptedCookies) {
        return (
            <div id="cookie-consent-banner" className="cookie-consent">
                {/* Cookie dialog content */}
                <button onClick={acceptCookies}>Accept All</button>
                <button onClick={rejectCookies}>Reject All</button>
            </div>
        );
    }
    return null;
}

export default CookieConsent;
