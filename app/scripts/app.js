'use strict';

/**
 * @ngdoc overview
 * @name noumiaApp
 * @description
 * # noumiaApp
 *
 * Main module of the application.
 */
 /* global $ */

$( document ).ready(function() {
    console.log( 'ready!' );

    $(window).scroll(function() {
        var windowscroll = $(window).scrollTop();
        if (windowscroll >= 100) {
            $('nav').addClass('fixed');
            $('#headIndexSite section').each(function(i) {
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

 var noumiaApp = angular
  .module('noumiaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Djado-Ivan', {
        templateUrl: 'views/project.html',
        controller: 'ivanCtrl'
      })
      .when('/Leni', {
        templateUrl: 'views/leni.html',
        controller: 'leniCtrl'
      })
      .when('/Maedchenstadtplan', {
        templateUrl: 'views/maedchenstadtplan.html',
        controller: 'maedchenCtrl'
      })
      .when('/wayw', {
        templateUrl: 'views/project.html',
        controller: 'waywCtrl'
      })
      .otherwise({
        redirectTo: '/views/main.html'
      });
  });

  /**** HIDE / SHOW LOADING ****/


noumiaApp.run(function($rootScope, $timeout, $window) {

   $rootScope.layout = {};
   $rootScope.layout.loading = false;

   $rootScope.$on('$routeChangeStart', function() {

      //show loading gif
      $rootScope.layout.loading = true;

   });

   $rootScope.$on('$routeChangeSuccess', function() {

      //hide loading gif
      // $rootScope.layout.loading = false;

			console.log('$routeChangeSuccess');
	    //hide loading gif
	    $timeout(function(){
	      $rootScope.layout.loading = false;
	    }, 200);

      /** SCROLL BACK TO TOP **/
      var interval = setInterval(function(){
         if (document.readyState === 'complete') {
           $window.scrollTo(0, 0);
           clearInterval(interval);
         }
      }, 200);

	});

   $rootScope.$on('$routeChangeError', function() {
       //hide loading gif
       console.log('$routeChangeError');
       $rootScope.layout.loading = false;
   });
});

noumiaApp.controller('TransitionCtrl', function($scope) {
    $scope.pageClass = 'page-transition';
});
noumiaApp.controller('MainCtrl', function($scope) {
    $scope.pageClass = 'page-transition';
});
