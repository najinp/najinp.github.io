$(function () {

    // 사랑받는 신입개발자 {20220620 jin topBanner}
    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });


    // e,s,c 에서 c가 숫자 !
    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow i').removeClass('on');
        if (c === 1) {
            $('.mainArrow i').addClass('on')
        }

        // console.log(s);
        // if (c) {
        //     c = c + 1;
        // } else { c = 1 }
        $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
    });

    $('.mainSlider').slick({
        arrows: false,
        // autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });
});


// 하는일이 이어지는거 메소드체인