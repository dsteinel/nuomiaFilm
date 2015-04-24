'use strict';
/* global $ */

$( document ).ready(function() {
    $(window).scroll(function() {
        var windowscroll = $(window).scrollTop();
        console.log(windowscroll);
        
        if (windowscroll < 1105) {
            $('.nav>li').removeClass('active');
            $('.nav>li:nth-child(1)').addClass('active');
        }
        else if (windowscroll >= 1105 && windowscroll < 2500) {
            $('.nav>li').removeClass('active');
            $('.nav>li:nth-child(2)').addClass('active');
        }
        else if (windowscroll >= 2500 && windowscroll < 3600) {
            $('.nav>li').removeClass('active');
            $('.nav>li:nth-child(3)').addClass('active');
        }
        else if (windowscroll >= 3600) {
            $('.nav>li').removeClass('active');
            $('.nav>li:nth-child(4)').addClass('active');
        }
        
    }).scroll();
});
