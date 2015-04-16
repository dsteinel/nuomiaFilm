'use strict';
/* global $ */

$( document ).ready(function() {
    console.log( 'ready!' );

    $(window).scroll(function() {
        var windowscroll = $(window).scrollTop();
        if (windowscroll >= 100) {
            console.log(windowscroll);
            $('nav').addClass('fixed');
            $('.wrapper section').each(function(i) {
                if ($(this).position().top <= windowscroll - 20) {
                    $('nav a.active').removeClass('active');
                    $('nav a').eq(i).addClass('active');
                }
            });

        } else {

            $('nav').removeClass('fixed');
            $('nav a.active').removeClass('active');
            $('nav a:first').addClass('active');
        }

    }).scroll();
});