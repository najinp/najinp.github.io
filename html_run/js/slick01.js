$(function () {
    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,


    });



    $('.slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        dots: true,
        pauseOnHover: false,
    });
    $('.slider02').slick({
        slidesToShow: 2,
        autoplay: true
    })
})







// 자동으로 돌아가게 하는 기능이 수동으로 지정된 디폴트
       // previous, next가 기본이 true로 되어있음
// 도큐먼트레디를 많아안쓰는 추세 ..
// 자바스크립트는 대소문자를 구분하기때문에 복사해오는게 좋다.
// slide to show는 몇개를 보여줄것인지(같은 이미지 숫자는 안돌림)