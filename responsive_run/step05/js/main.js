$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });


    // function대신에  ()=> {} 뭐이런식 써도 된다고하심 근데 인터넷 익스프롤어에서 안먹
    // $('.mbtn').on('click', () => $('.gnb').toggleClass('on'), console.log('하하'))

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {

        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').slideUp();
            $(this).next().stop().slideToggle();

        }
    });

    $('window').on('resize', function () {
        $('.gnb').removeClass('on');
        $('.smenu').removeAttr('style')
    })
})