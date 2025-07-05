const menuCheckbox = document.getElementById('checkbox2');

function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.left = `-${scrollLeft}px`;
    document.body.style.width = '100%';
}

function enableScroll() {
    const scrollTop = parseInt(document.body.style.top || '0') * -1;
    const scrollLeft = parseInt(document.body.style.left || '0') * -1;

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';

    window.scrollTo(scrollLeft, scrollTop);
}

menuCheckbox.addEventListener('change', function () {
    if (this.checked) {
        disableScroll();
    } else {
        enableScroll();
    }
});

document.addEventListener('click', function (event) {
    const menu = document.getElementById('menu_list');
    const toggle = document.querySelector('.toggle2');

    if (!menu.contains(event.target) && !toggle.contains(event.target) && !menuCheckbox.contains(event.target)) {
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
            enableScroll();
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuCheckbox.checked) {
        menuCheckbox.checked = false;
        enableScroll();
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('menu_link')) {
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
            enableScroll();
        }
    }
});

let translateInitialized = false;

function applyGoogleTranslateStyles() {
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
        }

        .goog-te-gadget-simple .goog-te-menu-value span {
            color: #ffffff !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
            color: #ffffff !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span:last-child {
            border-left: 4px solid transparent !important;
            border-right: 4px solid transparent !important;
            border-top: 4px solid #ffffff !important;
            margin-left: 8px !important;
        }

        .goog-te-gadget-icon {
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


    if (!document.getElementById('google-translate-dark-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'google-translate-dark-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}

function googleTranslateElementInit() {
    try {
        const targetElement = document.getElementById('google_translate_element');
        if (!targetElement) return;

        new google.translate.TranslateElement({
            pageLanguage: 'uk',
            includedLanguages: 'en,pl,de,fr,es,it',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');

        translateInitialized = true;

        setTimeout(() => {
            applyGoogleTranslateStyles();
            removeBanner();
        }, 500);

    } catch (error) {
        console.error('Error initializing Google Translate:', error);
    }
}

function switchToOriginal() {
    try {
        const selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
            selectElement.value = '';
            selectElement.dispatchEvent(new Event('change'));

            if (menuCheckbox.checked) {
                enableScroll();
                menuCheckbox.checked = false;
            }

            return;
        }

        const originalOption = document.querySelector('.goog-te-menu-item:first-child');
        if (originalOption) {
            originalOption.click();

            if (menuCheckbox.checked) {
                enableScroll();
                menuCheckbox.checked = false;
            }

            return;
        }

        if (window.location.href.includes('googtrans')) {
            const cleanUrl = window.location.href.split('#')[0].split('?')[0];

            if (menuCheckbox.checked) {
                enableScroll();
                menuCheckbox.checked = false;
            }

            window.location.href = cleanUrl;
            return;
        }

        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        if (menuCheckbox.checked) {
            enableScroll();
            menuCheckbox.checked = false;
        }

        window.location.reload();

    } catch (error) {
        console.error('Error switching to original language:', error);
    }
}

function removeBanner() {
    try {
        const selectors = [
            '.goog-te-banner-frame',
            '.goog-te-banner-frame.skiptranslate',
            '.goog-te-banner',
            '#goog-gt-banner',
            '.goog-te-spinner-pos'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });

        document.body.style.top = '0px';
        document.body.style.position = 'static';
        document.body.style.marginTop = '0px';
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

    setTimeout(() => observer.disconnect(), 10000);
}

function waitForGoogleTranslate(callback, maxAttempts = 50) {
    let attempts = 0;

    const checkInterval = setInterval(() => {
        if (typeof google !== 'undefined' && google.translate?.TranslateElement) {
            clearInterval(checkInterval);
            callback();
        } else if (++attempts >= maxAttempts) {
            clearInterval(checkInterval);
            console.error('Google Translate API failed to load after', maxAttempts, 'attempts');
        }
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    setupBannerRemoval();
});

window.addEventListener('load', () => {
    setupBannerRemoval();

    waitForGoogleTranslate(() => {
        if (!translateInitialized) {
            googleTranslateElementInit();
        }
    });
});

window.addEventListener('pageshow', () => {
    setupBannerRemoval();

    if (menuCheckbox.checked) {
        enableScroll();
        menuCheckbox.checked = false;
    }
});

document.addEventListener('click', function (event) {
    if (event.target.closest('.goog-te-gadget-simple')) {
        setTimeout(applyGoogleTranslateStyles, 100);
    }
});

window.googleTranslateElementInit = googleTranslateElementInit;
window.switchToOriginal = switchToOriginal;