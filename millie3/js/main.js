$(function () {
    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        asNavFor: '.slideText ul',
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });
    $('.slideText ul').slick({
        arrows: false,
        dots: true,
        asNavFor: '.mainSlide',
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });

    $('.tabMenu>li>a').on('click', function (e) {
        e.preventDefault();
        // console.log($(this).parent().index());
        var idx = $(this).parent().index();
        // const UL = document.querySelector('ul');
        // const setUL = function () {
        //     console.log(UL);
        //     ff();
        // };
        // UL.addEventListener('click', setUL);
        // LI.addEventListener('click', setUL);
        $('.tabContent>li').removeClass('on')
        $('.tabContent>li').eq(idx).addClass('on');
        $('.tabMenu>li').removeClass('on');
        $(this).parent().addClass('on')
    })

    $('.faTabMenu>li>a').on('click', function (e) {
        e.preventDefault();
        // console.log($(this).parent().index());
        var idx = $(this).parent().index();
        // const UL = document.querySelector('ul');
        // const setUL = function () {
        //     console.log(UL);
        //     ff();
        // };
        // UL.addEventListener('click', setUL);
        // LI.addEventListener('click', setUL);
        $('.faTabContent>li').removeClass('on')
        $('.faTabContent>li').eq(idx).addClass('on');
        $('.faTabMenu>li').removeClass('on');
        $(this).parent().addClass('on')
    })
})