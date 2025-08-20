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

  createPDFViewerHTML(pdfUrl) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>PDF Viewer</title>
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

    pdfLinks.forEach((link) => {
      this.addEventListener(link, "click", (e) => {
        e.preventDefault();
        const newWindow = window.open("", "_blank");
        newWindow.document.write(this.createPDFViewerHTML(link.href));
        newWindow.document.close();
      });
    });
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