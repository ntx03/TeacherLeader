const mainImage = document.querySelector('.greetings__image');
// фото Анны Кототаевой о себе
const aboutMeImage = document.querySelector('.me__image-biography');
// попап с фото 
const popupImage = document.querySelector('#popup_image_main');
// Фото в попапе
const imagePopup = document.querySelector('.popup__image');
//текст попапа
const popupText = document.querySelector('.popup__title-image');
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
// ищем фотографии по документу
const image = document.querySelectorAll('.me__image');

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
    imagePopup.src = "";
    popupText.textContent = "";
}

// открываем меню
function openMenu() {
    menu.classList.add('header__menu_open');
}
// навешиваем обработчик на все фотографии
image.forEach((item) => {
    item.addEventListener('click', function (event) {
        const target = event.target;
        imagePopup.src = target.src;
        popupText.textContent = target.alt;
        openPopupImageMain();
    })
});

// слушаем кнопку меню
menuButton.addEventListener('click', openMenu);


// слушаем фото на главной странице
aboutMeImage.addEventListener("click", openPopupImageMain);
closeIcon.addEventListener('click', closePopupImageMain);
popupOverlay.addEventListener('click', closePopupImageMain);