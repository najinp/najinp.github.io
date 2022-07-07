$(function () {
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
    })
    $('.gnb>ul>li>a').on('click', function (event) {
        if ($(window).width() < 769) {
            event.preventDefault();
            // $('.smenu').show();- 이거는 다 열리게 하는것
            $('.smenu').hide();
            $(this).next().show();
        }

    });


    $(window).on('resize', function () {
        $('.smenu').removeAttr('style')
    })
})