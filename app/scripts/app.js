'use strict';

/**
 * @ngdoc overview
 * @name dsteinel2015App
 * @description
 * # dsteinel2015App
 *
 * Main module of the application.
 */


 var dsteinel2015App = angular
  .module('dsteinel2015App', [
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
      .when('/hej', {
        templateUrl: 'views/project.html',
        controller: 'hejCtrl'
      })
      .when('/ois', {
        templateUrl: 'views/project.html',
        controller: 'oisCtrl'
      })
      .when('/n2k', {
        templateUrl: 'views/project.html',
        controller: 'n2kCtrl'
      })
      .when('/wayw', {
        templateUrl: 'views/project.html',
        controller: 'waywCtrl'
      })
      .when('/tronic', {
        templateUrl: 'views/project.html',
        controller: 'tronicCtrl'
      })
      .otherwise({
        redirectTo: '/views/main.html'
      });
  });

  /**** HIDE / SHOW LOADING ****/


dsteinel2015App.run(function($rootScope, $timeout, $window) {

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

dsteinel2015App.controller('TransitionCtrl', function($scope) {
    $scope.pageClass = 'page-transition';
});
dsteinel2015App.controller('MainCtrl', function($scope) {
    $scope.pageClass = 'page-transition';
});
