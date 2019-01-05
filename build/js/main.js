$(function(){
    $('#menu').slicknav();
});
$(document).ready(function(){
    $('.homepage-top-slider').slick({

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
var iso = new Isotope( '.homepage__portfolio__item__container', {
    itemSelector: '.homepage__portfolio__item',
    layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
        var number = itemElem.querySelector('.number').textContent;
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
        var name = itemElem.querySelector('.name').textContent;
        return name.match( /ium$/ );
    }
};

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
        return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.homepage__portfolio__button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
        // only work with buttons
        if ( !matchesSelector( event.target, 'button' ) ) {
            return;
        }
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        event.target.classList.add('is-checked');
    });
}