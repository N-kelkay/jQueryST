'use strict';
/*
 * New Commands:
 * setInterval(func, time);
 *
 * jQuery:
 * $(selector).animate(obj, time, classback);
 */

$(function () {

    //Configuration
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //Cache DOM
    var $slider = $("#slider");
    var $slideContainer = $slider.find(".slides");
    var $slides = $slideContainer.find(".slide");

    //setInterval
    //animate margin-left

    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({'margin-left': "-=" + width}, animationSpeed, function () {
                //if it's the last slide, go back to position 1 (0px)
                currentSlide++;
                if (currentSlide == $(".slide").length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
            }, pause);
    }

    //Stops the slider
    function stopSlider() {
        clearInterval(interval);
    }

    //listen for mouseenter and pause
    //resume on mouseleave
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    startSlider();
})