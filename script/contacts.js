// кнопка меню
const menuButton = document.querySelector('.header__menu-button');
// меню сайта
const menu = document.querySelector('.header__menu');
// открываем меню
function openMenu() {
    menu.classList.add('header__menu_open');
}
// слушаем кнопку меню
menuButton.addEventListener('click', openMenu);

// отправка формы 
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