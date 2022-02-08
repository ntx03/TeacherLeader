// фото Анны Кототаевой
const mainImage = document.querySelector('.greetings__image');
// попап с фото 
const popupImage = document.querySelector('#popup_image_main');
// оверлэй попапа
const popupOverlay = document.querySelector('.popup__overlay');
// иконка закрытия попапа
const closeIcon = document.querySelector('.popup__icon-image');
// кнопка меню
const menuButton = document.querySelector('.header__menu-button');
// меню сайта
const menu = document.querySelector('.header__menu');
// кнопки меню
const menuButtons = document.querySelectorAll('.header__menu-item');

// функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keydown', closepopupEsc);
}
// функция закрытия попапа
function popupClose(popup) {
    popup.classList.remove('popup_open');
    document.removeEventListener('keydown', closepopupEsc);
}
// функция закрытия попапа по эскейпу
function closepopupEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_open');
        popupClose(openedPopup)
    }
}
// открываем попап с фотографиями на первой странице
function openPopupImageMain() {
    openPopup(popupImage);
}
// закрываем попап с фотографиями на первой странице
function closePopupImageMain() {
    popupClose(popupImage);
}
// открываем меню
function openMenu() {
    menu.classList.add('header__menu_open');
    console.log("click");
    //menuButtons.forEach((item) => {
    //    item.addEventListener('click', menu.classList.remove('header__menu_open'));
    // })

}

// слушаем кнопку меню
menuButton.addEventListener('click', openMenu);


// слушаем фото на главной странице
mainImage.addEventListener("click", openPopupImageMain);
closeIcon.addEventListener('click', closePopupImageMain);
popupOverlay.addEventListener('click', closePopupImageMain);