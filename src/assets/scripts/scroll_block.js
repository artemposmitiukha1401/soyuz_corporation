// Universal scroll blocking functions
window.blockScroll = function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.left = `-${scrollLeft}px`;
    document.body.style.width = '100%';
    document.body.dataset.scrollTop = scrollTop;
    document.body.dataset.scrollLeft = scrollLeft;
};

window.unblockScroll = function () {
    const scrollTop = parseInt(document.body.dataset.scrollTop || '0');
    const scrollLeft = parseInt(document.body.dataset.scrollLeft || '0');

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';

    delete document.body.dataset.scrollTop;
    delete document.body.dataset.scrollLeft;

    window.scrollTo(scrollLeft, scrollTop);
};

// Dynamic menu toggle detection and setup
function setupScrollBlocking() {
    // Try multiple selectors to find the menu toggle
    const possibleSelectors = [
        '#checkbox2',
        '#menu-checkbox',
        '.menu-toggle',
        '[data-menu-toggle]',
        'input[type="checkbox"][id*="menu"]',
        'input[type="checkbox"][class*="menu"]'
    ];

    let menuCheckbox = null;

    for (const selector of possibleSelectors) {
        menuCheckbox = document.querySelector(selector);
        if (menuCheckbox) {
            console.log(`Found menu toggle with selector: ${selector}`);
            break;
        }
    }

    if (!menuCheckbox) {
        console.warn('No menu toggle element found on this page');
        return;
    }

    // Enhanced event listeners with better error handling
    menuCheckbox.addEventListener('change', function () {
        try {
            if (this.checked) {
                blockScroll();
            } else {
                unblockScroll();
            }
        } catch (error) {
            console.error('Error in menu checkbox handler:', error);
        }
    });

    // Click outside to close menu
    document.addEventListener('click', function (event) {
        try {
            const menu = document.getElementById('menu_list') ||
                document.querySelector('.menu-list') ||
                document.querySelector('[data-menu]');
            const toggle = document.querySelector('.toggle2') ||
                document.querySelector('.menu-toggle') ||
                document.querySelector('[data-menu-toggle-button]');

            if (menu && toggle && menuCheckbox &&
                !menu.contains(event.target) &&
                !toggle.contains(event.target) &&
                !menuCheckbox.contains(event.target)) {
                if (menuCheckbox.checked) {
                    menuCheckbox.checked = false;
                    unblockScroll();
                }
            }
        } catch (error) {
            console.error('Error in document click handler:', error);
        }
    });

    // Escape key to close menu
    document.addEventListener('keydown', function (event) {
        try {
            if (event.key === 'Escape' && menuCheckbox && menuCheckbox.checked) {
                menuCheckbox.checked = false;
                unblockScroll();
            }
        } catch (error) {
            console.error('Error in keydown handler:', error);
        }
    });

    // Close menu when clicking menu links
    document.addEventListener('click', function (event) {
        try {
            if (event.target.classList.contains('menu_link') ||
                event.target.closest('.menu_link')) {
                if (menuCheckbox && menuCheckbox.checked) {
                    menuCheckbox.checked = false;
                    unblockScroll();
                }
            }
        } catch (error) {
            console.error('Error in menu link handler:', error);
        }
    });

    console.log('Scroll blocking setup completed');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupScrollBlocking);
} else {
    setupScrollBlocking();
}

// Also try to initialize when the page is fully loaded (fallback)
window.addEventListener('load', function () {
    // Only run if not already initialized
    if (!window.scrollBlockingInitialized) {
        setupScrollBlocking();
        window.scrollBlockingInitialized = true;
    }
});
