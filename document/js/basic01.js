// 2022.05.30 팽나진 
// document.querySelector('.header').stlye .color ='red'

document.querySelector('.mopen').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('on');
    this.classList.toggle('on');

})