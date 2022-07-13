$(function () {

    $('.BsSlider').slick({
        slidesToShow: 3,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });



    $('.BsSlider figure .BsPic').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });

})