$( document ).ready(function() {

//NAV-MENU
    let flag = true;
    $('#button-menu').on('click', function () {
        // $('.nav-bar-hide').stop( true, false ).slideToggle(500);       - alternative flag
        if(flag) {
            flag = false;
            $('.nav-bar-hide').slideToggle(function () {
                flag = true;
            });
        }
        $(document).mouseup(function (e){
            let nav = $('.nav-bar-hide');
            let btn = $('#button-menu');
            let span = $('#button-menu span');
            if (!nav.is(e.target)
                && !btn.is(e.target)
                && !span.is(e.target)
                && nav.has(e.target).length === 0) {
                nav.fadeOut(200);
            }
        });
    });
//NAV-MENU-END

//POP-UP
    $('.popup').on('click', function () {
        $('.wrapp-popup').fadeIn(500);
        $('.cross').on('click', function () {
            $('.wrapp-popup').fadeOut(500);
        });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            let popup = $('.pop-up'); // тут указываем ID элемента
            if (!popup.is(e.target) // если клик был не по нашему блоку
                && popup.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.wrapp-popup').fadeOut(500); // скрываем его
            }
        });
    });
//POP-UP-END

});