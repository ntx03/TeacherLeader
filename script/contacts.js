// кнопка меню
const menuButton = document.querySelector('.header__menu-button');
// меню сайта
const menu = document.querySelector('.header__menu');
// кнопки меню
const menuButtons = document.querySelectorAll('.header__menu-item');
//Форма отправки сообщений
const form = document.querySelector('.contacts__form');
//поле формы имя
const inputName = document.querySelector('.contacts__input');
//поле формы текст
const inputText = document.querySelector('.contact__textarea');

const formData = () => {
    const data = {};

    data[input.name] = inputName.value;
    data[input.message] = inputText.value;
    return data;
}
// открываем меню
function openMenu() {
    menu.classList.add('header__menu_open');
}

// слушаем кнопку меню
menuButton.addEventListener('click', openMenu);

// слушаем отправку формы
//form.addEventListener('submit', function formSend(evt) {
//   evt.preventDefault();
//fetch('sendmail.php', {
//    method: "POST",
//    body: JSON.stringify({
//        message: formData
//    }),
// });
// if (res.ok) {
//     return res.json();
// } else {
//    return Promise.reject(
//        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
//     );
// }
$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Спасибо за сообщение!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});


//});

