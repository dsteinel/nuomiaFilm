'use strict';
/* global $ */

$( document ).ready(function() {

    $(window).scroll(function() {
        var windowscroll = $(window).scrollTop();
        console.log(windowscroll);
        
        if (windowscroll < 1305) {
            $('.nav>li').removeClass('active');
            $('.nav>li:nth-child(1)').addClass('active');
        }
        else if (windowscroll >= 1305 && windowscroll < 3779) {
            $('.nav>li').removeClass('active');
            $('.nav>li:nth-child(2)').addClass('active');
        }
        else if (windowscroll >= 3779 && windowscroll < 4470) {
            $('.nav>li').removeClass('active');
            $('.nav>li:nth-child(3)').addClass('active');
        }
        else if (windowscroll >= 4470) {
            $('.nav>li').removeClass('active');
            $('.nav>li:nth-child(4)').addClass('active');
        }
        
    }).scroll();
});