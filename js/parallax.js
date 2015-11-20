"use strict";
$(document).ready(function() {
    $(function() {
        var openButton = $('#button'),
            slide<a href="http://www.jqueryscript.net/menu/">Menu</a> = $('#menu'),
        layer = $('<div />').addClass('layer');
        openButton.on("click", function() {
            if (slideMenu.is(':hidden')) {
                slideMenu.slideDown(300);
            } else {
                slideMenu.slideUp(300);
                layer.remove();
            }
        });
    });
});