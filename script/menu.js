// кнопка меню
const menuButton = document.querySelector('.header__menu-button');
// меню сайта
const menu = document.querySelector('.header__menu');
// кнопки меню
const menuButtons = document.querySelectorAll('.header__menu-item');


// открываем меню
function openMenu() {
    menu.classList.add('header__menu_open');
}

// слушаем кнопку меню
menuButton.addEventListener('click', openMenu);

