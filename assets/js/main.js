$(function(){
    $('#menu').slicknav();
});
$(document).ready(function(){
    $('.homepage-top-slider').slick({

});
});
$(document).ready(function(){
    $('.homepage__testimonials__slider').slick({
        arrows : false,
        dots : true,
    });
});

(function() {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();
var fActive='';
function filterColor(color){
    if(fActive!=color){
        $('.homepage__portfolio__item').filter('.'+color).slideDown();
        $('.homepage__portfolio__item').filter(':not(.'+color+')').slideUp();fActive=color;}
}
$('.f-websites').click(function(){filterColor('websites');});
$('.f-brochoures').click(function(){filterColor('brochoures');});
$('.f-logos').click(function(){filterColor('logos');});
$('.f-all').click(function(){$('div').slideDown();fActive='all';});
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
