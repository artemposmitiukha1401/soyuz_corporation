// Clean Google‑Translate helper – no custom word replacements, no "back to Ukrainian" buttons

let translateInitialized = false;
let isTranslated = false;

function getCurrentTranslationLanguage() {
    for (const cookie of document.cookie.split(';')) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'googtrans' && value) {
            const parts = decodeURIComponent(value).split('/');
            if (parts.length >= 3 && parts[2] !== 'uk') return parts[2];
        }
    }
    const sel = document.querySelector('.goog-te-combo');
    return sel && sel.value && sel.value !== 'uk' ? sel.value : null;
}

function observeTranslationChanges() {
    let lastLang = getCurrentTranslationLanguage();
    new MutationObserver(() => {
        const cur = getCurrentTranslationLanguage();
        if (cur !== lastLang) {
            lastLang = cur;
            isTranslated = !!cur;
            if (translateInitialized) setTimeout(applyGoogleTranslateStyles, 300);
        }
    }).observe(document.body, {childList: true, subtree: true, characterData: true});
}

function applyGoogleTranslateStyles() {
    const css = `
    .goog-te-menu-frame {
      border-radius: 12px !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
      background: linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95)) !important;
      backdrop-filter: blur(15px) !important;
      overflow: hidden !important;
      min-width: 220px !important;
      max-width: 15rem !important;
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
      color: #fff !important;
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
      color: #fff !important;
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
      color: #fff !important;
      font-weight: 600 !important;
      box-shadow: inset 3px 0 0 #22c55e !important;
    }
    .goog-te-menu-frame .goog-te-menu-item-selected::after {
      content: '✓' !important;
      position: absolute !important;
      right: 15px !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      color: #fff !important;
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
      white-space: nowrap !important;
      max-width: 10rem !important;
    }
    .goog-te-gadget-simple:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)) !important;
      border-color: rgba(255, 255, 255, 0.4) !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
    }
    .goog-te-gadget-icon {
      display: none !important;
    }
    .goog-te-banner-frame,
    .skiptranslate > iframe {
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
  `;

    let style = document.getElementById('google-translate-custom');
    if (style) style.remove();
    style = document.createElement('style');
    style.id = 'google-translate-custom';
    style.textContent = css;
    document.head.appendChild(style);
}

function googleTranslateElementInit() {
    if (window.translateDisabled || translateInitialized) return;
    const target = document.getElementById('google_translate_element');
    if (!target) return console.error('translate element missing');

    new google.translate.TranslateElement({
        pageLanguage: 'uk',
        includedLanguages: 'en,uk,pl,de,fr,es,it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');

    translateInitialized = true;
    setTimeout(() => {
        applyGoogleTranslateStyles();
        observeTranslationChanges();
    }, 800);
}

function waitForGoogleTranslate(cb, tries = 50) {
    const id = setInterval(() => {
        if (window.google && google.translate && google.translate.TranslateElement) {
            clearInterval(id);
            cb();
        } else if (!--tries) clearInterval(id);
    }, 200);
}

window.addEventListener('load', () => {
    waitForGoogleTranslate(googleTranslateElementInit);
});