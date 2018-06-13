'use strict';
/*
 * New Commands:
 * setInterval(func, time);
 *
 * jQuery:
 * $(selector).animate(obj, time, classback);
 */

$(function () {

    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;

    //setInterval
        //animate margin-left
    setInterval(function () {
        $("#slider .slides").animate({'margin-left': "-=720"}, 1000);
    }, 3000);
        //if it's the last slide, go back to position 1 (0px)
    //listen for mouseenter and pause
    //resume on mouseleave
})