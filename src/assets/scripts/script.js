class WebsiteManager {
  constructor() {
    this.translateInitialized = false;
    this.isTranslated = false;
    this.mutationObserver = null;
    this.eventListeners = new Map();

    this.selectors = {
      translationSelect: ".goog-te-combo",
      menuCheckbox: "#checkbox2",
      menuList: "#menu_list",
      menuToggle: ".toggle2",
      menuLinks: ".menu_link",
      ukrainianButton: "#to_ukrainian",
      navLogo: "#nav_logo",
      footerLogo: "#footer_logo",
      translateElement: "#google_translate_element",
    };

    this.init();
  }

  addEventListener(element, event, handler, options = {}) {
    if (!element) return;

    const key = `${element.id || element.className}-${event}`;

    if (this.eventListeners.has(key)) {
      const { el, ev, h } = this.eventListeners.get(key);
      el.removeEventListener(ev, h);
    }

    element.addEventListener(event, handler, options);
    this.eventListeners.set(key, { el: element, ev: event, h: handler });
  }

  getCurrentTranslationLanguage() {
    const cookieMatch = document.cookie.match(/googtrans=([^;]*)/);
    if (cookieMatch) {
      const parts = decodeURIComponent(cookieMatch[1]).split("/");
      if (parts.length >= 3 && parts[2] !== "uk") {
        return parts[2];
      }
    }

    const select = document.querySelector(this.selectors.translationSelect);
    return select?.value && select.value !== "uk" ? select.value : null;
  }

  observeTranslationChanges() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }

    let lastLanguage = this.getCurrentTranslationLanguage();
    let timeoutId = null;

    this.mutationObserver = new MutationObserver(() => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const currentLanguage = this.getCurrentTranslationLanguage();
        if (currentLanguage !== lastLanguage) {
          lastLanguage = currentLanguage;
          this.isTranslated = !!currentLanguage;
        }
      }, 100);
    });

    this.mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  blockScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    Object.assign(document.body.style, {
      position: "fixed",
      top: `-${scrollTop}px`,
      width: "100%",
      overflow: "hidden",
    });
    document.documentElement.style.overflow = "hidden";
  }

  unblockScroll() {
    const scrollTop = parseInt(document.body.style.top || "0") * -1;

    Object.assign(document.body.style, {
      position: "",
      top: "",
      width: "",
      overflow: "",
    });
    document.documentElement.style.overflow = "";

    if (scrollTop > 0) {
      window.scrollTo(0, scrollTop);
    }
  }

  resetToUkrainian() {
    const domain = window.location.hostname;
    const expireDate = "Thu, 01 Jan 1970 00:00:00 UTC";

    const cookiesToClear = [
      `googtrans=; expires=${expireDate}; path=/; domain=${domain}`,
      `googtrans=; expires=${expireDate}; path=/; domain=.${domain}`,
      `googtrans=; expires=${expireDate}; path=/`,
    ];

    cookiesToClear.forEach((cookie) => {
      document.cookie = cookie;
    });

    const select = document.querySelector(this.selectors.translationSelect);
    if (select) {
      select.value = "";
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    this.isTranslated = false;

    requestAnimationFrame(() => {
      window.location.reload();
    });
  }

  initializeGoogleTranslate() {
    if (window.translateDisabled || this.translateInitialized) return;

    const target = document.querySelector(this.selectors.translateElement);
    if (!target) {
      console.error("Елемент Google Translate не знайдено");
      return;
    }

    new google.translate.TranslateElement(
      {
        pageLanguage: "uk",
        includedLanguages: "en,pl,de,fr,es,it",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      target.id
    );

    this.translateInitialized = true;

    setTimeout(() => {
      this.observeTranslationChanges();
    }, 800);
  }

  waitForGoogleTranslate() {
    return new Promise((resolve, reject) => {
      let attempts = 50;
      const interval = setInterval(() => {
        if (window.google?.translate?.TranslateElement) {
          clearInterval(interval);
          resolve();
        } else if (--attempts <= 0) {
          clearInterval(interval);
          reject(new Error("Google Translate не завантажено"));
        }
      }, 200);
    });
  }

  // Добавляем CSS стили для кнопки
  injectButtonStyles() {
    const styles = `
      <style id="pdf-viewer-styles">
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .back-button {
          position: fixed !important;
          top: 20px !important;
          left: 20px !important;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          font-family: "Inter", sans-serif !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          color: #e2e8f0 !important;
          padding: 14px 20px !important;
          border-radius: 8px !important;
          cursor: pointer !important;
          backdrop-filter: blur(10px) !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.25s ease !important;
          display: inline-flex !important;
          align-items: center;
          gap: 8px;
          white-space: nowrap !important;
          overflow: hidden !important;
          min-width: 120px !important;
          text-align: center !important;
          z-index: 1000;
          animation: fadeInUp 0.3s ease-out !important;
        }
        
        .back-button::before {
          content: "" !important;
          position: absolute !important;
          top: 0 !important;
          left: -100% !important;
          width: 100% !important;
          height: 100% !important;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8)) !important;
          transition: left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          z-index: -1 !important;
        }
        
        .back-button:hover::before {
          left: 0 !important;
        }
        
        .back-button:hover {
          border-color: rgba(255, 255, 255, 0.4) !important;
          color: #fff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), inset 3px 0 0 #3b82f6 !important;
        }
        
        .back-button:active {
          transform: translateY(0) !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
        }
        
        .back-arrow {
          font-size: 18px;
          line-height: 1;
        }
      </style>
    `;
    return styles;
  }

  createPDFViewerHTML(pdfUrl) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>PDF Viewer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${this.injectButtonStyles()}
        <style>
          body {
            margin: 0;
            padding: 0;
            background: #2a2a2a;
            font-family: Arial, sans-serif;
            overflow: hidden;
          }
          embed {
            width: 100%;
            height: 100vh;
            border: none;
          }
        </style>
      </head>
      <body>
        <button class="back-button" onclick="window.close()">
          <span class="back-arrow">←</span>
          <span>Повернутись</span>
        </button>
        <embed src="${pdfUrl}" type="application/pdf">
      </body>
      </html>
    `;
  }

  initializePDFHandler() {
    const pdfLinks = document.querySelectorAll('a[href$=".pdf"], a[href*=".pdf"]');

    pdfLinks.forEach((link, index) => {
    
      const handler = (e) => {
        e.preventDefault();
        e.stopPropagation();

    
        const pdfUrl = link.getAttribute('href');

      
        if (!pdfUrl) {
          console.error('PDF URL на був знайден для посилання:', link);
          return;
        }

        try {
          const newWindow = window.open('', '_blank');
          if (newWindow) {
            const htmlContent = this.createPDFViewerHTML(pdfUrl);
            newWindow.document.write(htmlContent);
            newWindow.document.close();
          } else {
            window.open(pdfUrl, '_blank');
          }
        } catch (error) {
          console.error('Ошибка открытия PDF:', error);
          window.open(pdfUrl, '_blank');
        }
      };

      const eventKey = `pdf-link-${index}`;
      if (this.eventListeners.has(eventKey)) {
        const { el, ev, h } = this.eventListeners.get(eventKey);
        el.removeEventListener(ev, h);
      }

      link.addEventListener('click', handler);
      this.eventListeners.set(eventKey, {
        el: link,
        ev: 'click',
        h: handler
      });
    });

    console.log(`Инициализировано ${pdfLinks.length} PDF ссылок`);
  }

  initializeMenu() {
    const menuCheckbox = document.querySelector(this.selectors.menuCheckbox);
    const menuList = document.querySelector(this.selectors.menuList);
    const menuToggle = document.querySelector(this.selectors.menuToggle);
    const menuLinks = document.querySelectorAll(this.selectors.menuLinks);

    if (!menuCheckbox) return;

    const closeMenu = () => {
      if (menuCheckbox.checked) {
        menuCheckbox.checked = false;
        this.unblockScroll();
      }
    };

    this.addEventListener(menuCheckbox, "change", (e) => {
      if (e.target.checked) {
        this.blockScroll();
      } else {
        this.unblockScroll();
      }
    });

    this.addEventListener(document, "keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    this.addEventListener(window, "beforeunload", closeMenu);

    menuLinks.forEach((link) => {
      this.addEventListener(link, "click", closeMenu);
    });

    this.addEventListener(document, "click", (e) => {
      if (!menuCheckbox.checked) return;

      const isClickInsideMenu = menuList?.contains(e.target);
      const isClickOnToggle = menuToggle?.contains(e.target);
      const isClickOnCheckbox = e.target === menuCheckbox;

      if (!isClickInsideMenu && !isClickOnToggle && !isClickOnCheckbox) {
        closeMenu();
      }
    });
  }

  initializeLogoNavigation() {
    const logos = [
      document.querySelector(this.selectors.navLogo),
      document.querySelector(this.selectors.footerLogo),
    ].filter(Boolean);

    const navigateToHome = () => {
      window.location.href = `${window.location.origin}/index.html`;
    };

    logos.forEach((logo) => {
      this.addEventListener(logo, "click", navigateToHome);
    });
  }

  initializeUkrainianButton() {
    const button = document.querySelector(this.selectors.ukrainianButton);
    if (button) {
      this.addEventListener(button, "click", () => this.resetToUkrainian());
    }
  }

  async init() {
    if (document.readyState === "loading") {
      await new Promise((resolve) => {
        document.addEventListener("DOMContentLoaded", resolve, { once: true });
      });
    }

    this.initializeMenu();
    this.initializeLogoNavigation();
    this.initializePDFHandler();
    this.initializeUkrainianButton();

    if (document.readyState !== "complete") {
      await new Promise((resolve) => {
        window.addEventListener("load", resolve, { once: true });
      });
    }

    try {
      await this.waitForGoogleTranslate();
      this.initializeGoogleTranslate();
    } catch (error) {
      console.warn("Помилка ініціалізації Google Translate:", error);
    }
  }

  destroy() {
    this.eventListeners.forEach(({ el, ev, h }) => {
      el.removeEventListener(ev, h);
    });
    this.eventListeners.clear();

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
}

const websiteManager = new WebsiteManager();
window.websiteManager = websiteManager;