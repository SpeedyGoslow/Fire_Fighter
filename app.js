const menu = document.querySelector('#mobile-menu');
const MenuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    MenuLinks.classList.toggle('active');
});