let translateInitialized = false;

function applyGoogleTranslateStyles() {
    console.log('Applying Google Translate styles...');

    const styles = `
        .goog-te-menu-frame {
            border-radius: 12px !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            background: linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95)) !important;
            backdrop-filter: blur(15px) !important;
            overflow: hidden !important;
            min-width: 180px !important;
            margin-top: 8px !important;
            animation: slideIn 0.3s ease-out !important;
            z-index: 9999 !important;
            position: fixed !important;
        }

        .goog-te-menu-frame .goog-te-menu {
            background: transparent !important;
            padding: 8px 0 !important;
        }

        .goog-te-menu-frame .goog-te-menu-item {
            padding: 14px 20px !important;
            font-family: 'Inter', sans-serif !important;
            font-size: 15px !important;
            font-weight: 500 !important;
            color: #e2e8f0 !important;
            transition: all 0.25s ease !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            cursor: pointer !important;
            position: relative !important;
            background: transparent !important;
        }

        .goog-te-menu-frame .goog-te-menu-item:hover {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8)) !important;
            color: #ffffff !important;
            transform: translateX(5px) !important;
            padding-left: 25px !important;
            box-shadow: inset 3px 0 0 #3b82f6 !important;
        }

        .goog-te-menu-frame .goog-te-menu-item:hover::before {
            content: '→' !important;
            position: absolute !important;
            left: 8px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            color: #ffffff !important;
            font-weight: bold !important;
        }

        .goog-te-menu-frame .goog-te-menu-item:last-child {
            border-bottom: none !important;
            border-radius: 0 0 12px 12px !important;
        }

        .goog-te-menu-frame .goog-te-menu-item:first-child {
            border-radius: 12px 12px 0 0 !important;
        }

        .goog-te-menu-frame .goog-te-menu-item-selected {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(22, 163, 74, 0.8)) !important;
            color: #ffffff !important;
            font-weight: 600 !important;
            box-shadow: inset 3px 0 0 #22c55e !important;
        }

        .goog-te-menu-frame .goog-te-menu-item-selected::after {
            content: '✓' !important;
            position: absolute !important;
            right: 15px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            color: #ffffff !important;
            font-weight: bold !important;
        }

        .goog-te-gadget-simple {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            font-size: 14px !important;
            padding: 10px 15px !important;
            border-radius: 8px !important;
            transition: all 0.3s ease !important;
            cursor: pointer !important;
            backdrop-filter: blur(10px) !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
            display: inline-block !important;
            width: auto !important;
            max-width: 140px !important;
            height: auto !important;
            min-height: 40px !important;
            vertical-align: top !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            justify-content: center !important;
            text-align: center !important;
        }

        .goog-te-gadget-simple:hover {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)) !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value {
            color: #ffffff !important;
            font-weight: 500 !important;
            display: inline-block !important;
            vertical-align: middle !important;
            line-height: 1.2 !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span {
            color: #ffffff !important;
            display: inline-block !important;
            vertical-align: middle !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
            color: #ffffff !important;
            margin-right: 5px !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span:last-child {
            border-left: 4px solid transparent !important;
            border-right: 4px solid transparent !important;
            border-top: 4px solid #ffffff !important;
            margin-left: 8px !important;
            width: 0 !important;
            height: 0 !important;
            display: inline-block !important;
            vertical-align: middle !important;
        }

        /* Fix for stretched widget */
        .goog-te-gadget-simple table {
            width: auto !important;
            border-collapse: collapse !important;
        }

        .goog-te-gadget-simple td {
            padding: 0 !important;
            border: none !important;
            vertical-align: middle !important;
        }

        /* Container fix */
        #google_translate_element {
            display: inline-block !important;
            vertical-align: top !important;
        }

        #google_translate_element > div {
            display: inline-block !important;
        }

        .goog-te-gadget-icon {
            display: none !important;  
        }
        .VIpgJd-ZVi9od-xl07Ob-lTBxed > span:nth-child(5), .VIpgJd-ZVi9od-xl07Ob-lTBxed > span:nth-child(3) {
            display: none !important;
}

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .goog-te-banner-frame {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            opacity: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        .skiptranslate > iframe {
            height: 0 !important;
            border-style: none !important;
            box-shadow: none !important;
            display: none !important;
        }

        body {
            top: 0 !important;
            position: static !important;
        }
    `;

    // Remove existing styles first
    const existingStyles = document.getElementById('google-translate-dark-styles');
    if (existingStyles) {
        existingStyles.remove();
    }

    // Add new styles
    const styleSheet = document.createElement('style');
    styleSheet.id = 'google-translate-dark-styles';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Force refresh of styles
    setTimeout(() => {
        const frames = document.querySelectorAll('.goog-te-menu-frame');
        frames.forEach(frame => {
            frame.style.display = 'none';
            frame.offsetHeight; // Force reflow
            frame.style.display = '';
        });
        console.log('Styles applied and refreshed');
    }, 100);
}

function googleTranslateElementInit() {
    try {
        console.log('Initializing Google Translate...');
        const targetElement = document.getElementById('google_translate_element');
        if (!targetElement) {
            console.error('Google Translate target element not found');
            return;
        }

        new google.translate.TranslateElement({
            pageLanguage: 'uk',
            includedLanguages: 'en,pl,de,fr,es,it',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');

        translateInitialized = true;
        console.log('Google Translate initialized successfully');

        // Increased timeout for better reliability
        setTimeout(() => {
            applyGoogleTranslateStyles();
            removeBanner();
            waitForTranslateWidget();
        }, 1000);

    } catch (error) {
        console.error('Error initializing Google Translate:', error);
    }
}

function resetGoogleTranslateWidget() {
    try {
        console.log('Resetting Google Translate widget...');

        // Remove existing widget
        const existingWidget = document.querySelector('#google_translate_element');
        if (existingWidget) {
            existingWidget.innerHTML = '';
        }

        // Remove existing styles
        const existingStyles = document.getElementById('google-translate-dark-styles');
        if (existingStyles) {
            existingStyles.remove();
        }

        // Reset initialization flag
        translateInitialized = false;

        // Wait a moment then reinitialize
        setTimeout(() => {
            if (typeof google !== 'undefined' && google.translate?.TranslateElement) {
                googleTranslateElementInit();
            } else {
                waitForGoogleTranslate(() => {
                    googleTranslateElementInit();
                });
            }
        }, 100);

    } catch (error) {
        console.error('Error resetting Google Translate widget:', error);
    }
}

function waitForTranslateWidget() {
    console.log('Waiting for translate widget...');
    let attempts = 0;
    const maxAttempts = 30;

    const checkWidget = setInterval(() => {
        const widget = document.querySelector('.goog-te-gadget-simple');
        if (widget) {
            clearInterval(checkWidget);
            console.log('Translate widget found, applying styles...');
            applyGoogleTranslateStyles();
        } else if (++attempts >= maxAttempts) {
            clearInterval(checkWidget);
            console.warn('Translate widget not found after', maxAttempts, 'attempts');
        }
    }, 200);
}

function switchToOriginal() {
    try {
        console.log('Switching to original language...');

        // Method 1: Try select element
        const selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
            selectElement.value = '';
            selectElement.dispatchEvent(new Event('change'));

            if (menuCheckbox && menuCheckbox.checked) {
                enableScroll();
                menuCheckbox.checked = false;
            }
            console.log('Language switched via select element');
            return;
        }

        // Method 2: Try clicking original option
        const originalOption = document.querySelector('.goog-te-menu-item:first-child');
        if (originalOption) {
            originalOption.click();

            if (menuCheckbox && menuCheckbox.checked) {
                enableScroll();
                menuCheckbox.checked = false;
            }
            console.log('Language switched via menu item click');
            return;
        }

        // Method 3: URL manipulation
        if (window.location.href.includes('googtrans')) {
            const cleanUrl = window.location.href.split('#')[0].split('?')[0];

            if (menuCheckbox && menuCheckbox.checked) {
                enableScroll();
                menuCheckbox.checked = false;
            }

            window.location.href = cleanUrl;
            console.log('Language switched via URL manipulation');
            return;
        }

        // Method 4: Clear cookie and reload
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        if (menuCheckbox && menuCheckbox.checked) {
            enableScroll();
            menuCheckbox.checked = false;
        }

        console.log('Clearing cookie and reloading...');
        window.location.reload();

    } catch (error) {
        console.error('Error switching to original language:', error);
    }
}

function removeBanner() {
    try {
        console.log('Removing Google Translate banner...');
        const selectors = [
            '.goog-te-banner-frame',
            '.goog-te-banner-frame.skiptranslate',
            '.goog-te-banner',
            '#goog-gt-banner',
            '.goog-te-spinner-pos'
        ];

        let removedCount = 0;
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.remove();
                removedCount++;
            });
        });

        document.body.style.top = '0px';
        document.body.style.position = 'static';
        document.body.style.marginTop = '0px';

        console.log(`Removed ${removedCount} banner elements`);
    } catch (error) {
        console.error('Error removing banner:', error);
    }
}

function setupBannerRemoval() {
    removeBanner();

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (
                    node.nodeType === Node.ELEMENT_NODE &&
                    (
                        node.classList?.contains('goog-te-banner-frame') ||
                        node.classList?.contains('goog-te-banner') ||
                        node.id === 'goog-gt-banner'
                    )
                ) {
                    node.remove();
                    console.log('Dynamically added banner removed');
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Disconnect observer after 15 seconds instead of 10
    setTimeout(() => {
        observer.disconnect();
        console.log('Banner removal observer disconnected');
    }, 15000);
}

function waitForGoogleTranslate(callback, maxAttempts = 50) {
    let attempts = 0;
    console.log('Waiting for Google Translate API...');

    const checkInterval = setInterval(() => {
        if (typeof google !== 'undefined' && google.translate?.TranslateElement) {
            clearInterval(checkInterval);
            console.log('Google Translate API loaded successfully');
            callback();
        } else if (++attempts >= maxAttempts) {
            clearInterval(checkInterval);
            console.error('Google Translate API failed to load after', maxAttempts, 'attempts');
        }
    }, 200); // Increased from 100ms to 200ms
}

// Enhanced click handler with debugging
document.addEventListener('click', function (event) {
    try {
        console.log('Clicked element:', event.target);

        if (event.target.closest('.goog-te-gadget-simple')) {
            console.log('Google Translate widget clicked');
            setTimeout(() => {
                applyGoogleTranslateStyles();
                console.log('Styles reapplied after widget click');
            }, 100);
        }
    } catch (error) {
        console.error('Error in Google Translate click handler:', error);
    }
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Setting up banner removal');
    setupBannerRemoval();
});

window.addEventListener('load', () => {
    console.log('Window loaded - Initializing Google Translate');
    setupBannerRemoval();

    waitForGoogleTranslate(() => {
        if (!translateInitialized) {
            googleTranslateElementInit();
        }
    });
});

window.addEventListener('pageshow', (event) => {
    console.log('Page show event - Resetting state');
    setupBannerRemoval();

    if (menuCheckbox && menuCheckbox.checked) {
        enableScroll();
        menuCheckbox.checked = false;
    }

    // Reapply styles on page show
    if (translateInitialized) {
        setTimeout(applyGoogleTranslateStyles, 500);
    }
});

// Additional event listener for better style persistence
document.addEventListener('DOMNodeInserted', function (event) {
    if (event.target.classList && event.target.classList.contains('goog-te-menu-frame')) {
        console.log('Google Translate menu frame inserted - applying styles');
        setTimeout(applyGoogleTranslateStyles, 50);
    }
});

// Global function assignments
window.googleTranslateElementInit = googleTranslateElementInit;
window.switchToOriginal = switchToOriginal;
window.resetGoogleTranslateWidget = resetGoogleTranslateWidget;

// Debug function for troubleshooting
window.debugGoogleTranslate = function () {
    console.log('=== Google Translate Debug Info ===');
    console.log('translateInitialized:', translateInitialized);
    console.log('Google API available:', typeof google !== 'undefined');
    console.log('Translate element:', document.getElementById('google_translate_element'));
    console.log('Widget:', document.querySelector('.goog-te-gadget-simple'));
    console.log('Menu frames:', document.querySelectorAll('.goog-te-menu-frame'));
    console.log('Styles applied:', document.getElementById('google-translate-dark-styles'));
    console.log('Current page URL:', window.location.href);

    // Check if widget is stretched
    const widget = document.querySelector('.goog-te-gadget-simple');
    if (widget) {
        console.log('Widget dimensions:', {
            width: widget.offsetWidth,
            height: widget.offsetHeight,
            display: getComputedStyle(widget).display
        });
    }
};

// Function to fix stretched widget
window.fixStretchedWidget = function () {
    console.log('Attempting to fix stretched widget...');

    setTimeout(() => {
        applyGoogleTranslateStyles();

        // Additional fix for stretched widget
        const widget = document.querySelector('.goog-te-gadget-simple');
        if (widget) {
            widget.style.width = 'auto';
            widget.style.maxWidth = '200px';
            widget.style.display = 'inline-block';
            widget.style.verticalAlign = 'top';

            // Force reflow
            widget.offsetHeight;
            console.log('Widget fixed');
        }
    }, 100);
};