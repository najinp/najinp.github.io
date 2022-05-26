$(function () {
    $('.smile').on('click', function () {
        $(this).toggleClass('active')
    });

    $('.top_banner button').on('click', function () {
        $('.top_banner .container').toggleClass('active');
    })
})

// toggleClass 붙였다 뗏다
