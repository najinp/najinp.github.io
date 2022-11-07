
$(function () {
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.ProductSlider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }]

    });
    $('.glslide').slick({
        arrows: false,
        slidesToShow: 1,
    });
    $('.grslide').slick({
        arrows: false,
        slidesToShow: 1,
    });

    function mopen() {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    }

    $('.mopen').on('click', mopen)



    $('.ingredientSlider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }]
    });


    $('.ingredient .ingredientArrows i:nth-child(1)').on('click', function () {
        $('.ingredientSlider').slick('slickPrev')
    });
    $('.ingredient .ingredientArrows i:nth-child(2)').on('click', function () {
        $('.ingredientSlider').slick('slickNext')
    });



})







