"use strict";

$(window).bind('scroll', function (e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('#parallax-layer1').css('top', (0 - (scrolled * .25)) + 'px');
    $('#parallax-layer2').css('top', (0 - (scrolled * .5)) + 'px');
    $('#parallax-layer3').css('top', (0 - (scrolled * .75)) + 'px');
}



