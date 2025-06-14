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
menuCheckbox.addEventListener('change', function() {
    if (this.checked) {
        disableScroll();
    } else {
        enableScroll();
    }
});
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu_list');
    const toggle = document.querySelector('.toggle2');
    
    if (!menu.contains(event.target) && !toggle.contains(event.target) && !menuCheckbox.contains(event.target)) {
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
            enableScroll();
        }
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && menuCheckbox.checked) {
        menuCheckbox.checked = false;
        enableScroll();
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('menu_link')) {
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
            enableScroll();
        }
    }
});