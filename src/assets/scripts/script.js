let translateInitialized = false;
let isTranslated = false;

function getCurrentTranslationLanguage() {
  for (const cookie of document.cookie.split(";")) {
    const [name, value] = cookie.trim().split("=");
    if (name === "googtrans" && value) {
      const parts = decodeURIComponent(value).split("/");
      if (parts.length >= 3 && parts[2] !== "uk") return parts[2];
    }
  }
  const sel = document.querySelector(".goog-te-combo");
  return sel && sel.value && sel.value !== "uk" ? sel.value : null;
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
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
}

function applyGoogleTranslateStyles() {
  const css = `
    goog-te-menu-frame {
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
  overflow: hidden !important;
}

.goog-te-menu-frame .goog-te-menu-item::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: -100% !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8)) !important;
  transition: left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  z-index: -1 !important;
}

.goog-te-menu-frame .goog-te-menu-item:hover::before {
  left: 0 !important;
}

.goog-te-menu-frame .goog-te-menu-item:hover {
  color: #fff !important;
  transform: translateX(5px) !important;
  padding-left: 25px !important;
  box-shadow: inset 3px 0 0 #3b82f6 !important;
}

.goog-te-menu-frame .goog-te-menu-item:last-child {
  border-bottom: none !important;
  border-radius: 0 0 12px 12px !important;
}

.goog-te-menu-frame .goog-te-menu-item:first-child {
  border-radius: 12px 12px 0 0 !important;
}

.goog-te-menu-frame .goog-te-menu-item-selected::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(22, 163, 74, 0.8)) !important;
  z-index: -1 !important;
}

.goog-te-menu-frame .goog-te-menu-item-selected {
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
  z-index: 1 !important;
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
  position: relative !important;
  overflow: hidden !important;
}

.goog-te-gadget-simple::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: -100% !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)) !important;
  transition: left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  z-index: -1 !important;
}

.goog-te-gadget-simple:hover::before {
  left: 0 !important;
}

.goog-te-gadget-simple:hover {
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
    @media (max-width: 320px){
      .goog-te-gadget-simple {
        width: 7rem !important;
        font-size: 0.8rem !important;
        justify-content: center;
        text-align:center;
        margin-left: 0 !important;
      }

    }
  `;

  let style = document.getElementById("google-translate-custom");
  if (style) style.remove();
  style = document.createElement("style");
  style.id = "google-translate-custom";
  style.textContent = css;
  document.head.appendChild(style);
}

// Scroll blocking functionality
function blockScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollTop}px`;
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
}

function unblockScroll() {
  const scrollTop = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";

  if (scrollTop) {
    window.scrollTo(0, parseInt(scrollTop || "0") * -1);
  }
}

function resetToUkrainian() {
  document.cookie =
    "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
  document.cookie =
    "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." +
    window.location.hostname;
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  const googleTranslateSelect = document.querySelector(".goog-te-combo");
  if (googleTranslateSelect) {
    googleTranslateSelect.value = "";
    const changeEvent = new Event("change", { bubbles: true });
    googleTranslateSelect.dispatchEvent(changeEvent);
  }

  isTranslated = false;

  setTimeout(() => {
    window.location.reload();
  }, 100);
}

function initializeUkrainianButton() {
  const ukrainianButton = document.getElementById("to_ukrainian");
  if (ukrainianButton) {
    ukrainianButton.addEventListener("click", resetToUkrainian);
  }
}

function googleTranslateElementInit() {
  if (window.translateDisabled || translateInitialized) return;
  const target = document.getElementById("google_translate_element");
  if (!target) return console.error("translate element missing");

  new google.translate.TranslateElement(
    {
      pageLanguage: "uk",
      includedLanguages: "en,pl,de,fr,es,it",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    "google_translate_element"
  );

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

function initializePDFHandler() {
  const pdfLinks = document.querySelectorAll('a[href$=".pdf"], a[href*=".pdf"]');

  pdfLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const newWindow = window.open("", "_blank");
      newWindow.document.write(`
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
        .back-button {
            position: fixed;
            top: 20px;
            left: 20px;
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
            position: fixed !important;
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
        .back-arrow {
            font-size: 18px;
            line-height: 1;
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
    <embed src="${this.href}" type="application/pdf">
</body>
</html>
            `);
      newWindow.document.close();
    });
  });
}

function initializeScrollBlock() {
  const menuCheckbox = document.getElementById("checkbox2");

  if (menuCheckbox) {
    menuCheckbox.addEventListener("change", function () {
      if (this.checked) {
        blockScroll();
      } else {
        unblockScroll();
      }
    });
  }
}

window.addEventListener("load", () => {
  waitForGoogleTranslate(googleTranslateElementInit);
  setTimeout(initializeUkrainianButton, 1000);

  setTimeout(initializePDFHandler, 500);

  initializeScrollBlock();
});

document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("checkbox2");
  const menuList = document.getElementById("menu_list");
  const menuToggle = document.querySelector(".toggle2");
  const menuLinks = document.querySelectorAll(".menu_link");

  function closeMenu() {
    if (menuCheckbox && menuCheckbox.checked) {
      menuCheckbox.checked = false;
      unblockScroll();
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      closeMenu();
    }
  });

  window.addEventListener("beforeunload", function () {
    closeMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (e) {
    if (menuCheckbox && menuCheckbox.checked) {
      const isClickInsideMenu = menuList && menuList.contains(e.target);
      const isClickOnToggle = menuToggle && menuToggle.contains(e.target);
      const isClickOnCheckbox = e.target === menuCheckbox;

      if (!isClickInsideMenu && !isClickOnToggle && !isClickOnCheckbox) {
        closeMenu();
      }
    }
  });

  initializeUkrainianButton();
  initializePDFHandler();
  initializeScrollBlock();
  initializeLogoNavigation();
});
function initializeLogoNavigation() {
  const navLogo = document.getElementById("nav_logo");
  const footerLogo = document.getElementById("footer_logo");

  function navigateToHome() {
    const baseUrl = window.location.origin;
    window.location.href = baseUrl + "/index.html";
  }

  if (navLogo) {
    navLogo.addEventListener("click", navigateToHome);
  }

  if (footerLogo) {
    footerLogo.addEventListener("click", navigateToHome);
  }
}
