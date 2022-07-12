$(function () {

    $('.BsSlider').slick({
        slidesToShow: 3,
        arrows: false,
    });



    $('.BsSlider figure .BsPic').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });

})