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
 /* global $f */

 $( document ).ready(function() {
  setTimeout(
    function() 
    {
      $(function() {
        var iframe = $('#player1')[0];
        var player = $f(iframe);
        var status = $('.status');

      // When the player is ready, add listeners for pause, finish, and playProgress
      player.addEvent('ready', function() {
        status.text('ready');

        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgress);
      });

      // Call the API when a button is pressed
      $('button').bind('click', function() {
        player.api($(this).text().toLowerCase());
      });

      function onPause(id) {
        status.text('paused');
        $('#video-text-overlay').fadeIn(300);
      }

      function onFinish(id) {
        status.text('finished');
        $('#video-text-overlay').fadeIn(300);
      }

      function onPlayProgress(data, id) {
        status.text(data.seconds + 's played');
        $('#video-text-overlay').fadeOut(300);
      }
    });
    }, 2000);

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
 .config(["$routeProvider", function ($routeProvider) {
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
    templateUrl: 'views/project.html',
    controller: 'leniCtrl'
  })
  .when('/Maedchenstadtplan', {
    templateUrl: 'views/project.html',
    controller: 'maedchenCtrl'
  })
  .when('/wayw', {
    templateUrl: 'views/project.html',
    controller: 'waywCtrl'
  })
  .otherwise({
    redirectTo: '/views/main.html'
  });
}]);

 /**** HIDE / SHOW LOADING ****/


 noumiaApp.run(["$rootScope", "$timeout", "$window", function($rootScope, $timeout, $window) {

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
     }, 100);

      /** SCROLL BACK TO TOP **/
      var interval = setInterval(function(){
       if (document.readyState === 'complete') {
         // $window.scrollTo(0, 0);
         clearInterval(interval);
       }
     }, 100);

    });

   $rootScope.$on('$routeChangeError', function() {
       //hide loading gif
       console.log('$routeChangeError');
       $rootScope.layout.loading = false;
     });
 }]);

 noumiaApp.controller('TransitionCtrl', ["$scope", function($scope) {
  $scope.pageClass = 'page-transition';
}]);
 noumiaApp.controller('MainCtrl', ["$scope", "$location", "$anchorScroll", function($scope, $location, $anchorScroll) {
  $scope.pageClass = 'page-transition';
  $scope.scrollTo = function(id) {
    $location.hash(id);
    // console.log($location.hash());
    $anchorScroll();
  };
}]);

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

'use strict';

/**
 * @ngdoc function
 * @name noumiaApp.controller:mainCtrl
 * @description
 * # hejCtrl
 * Controller of the noumiaApp
 */
 angular.module('noumiaApp')
 .controller('ivanCtrl', ["$scope", "$sce", function ($scope, $sce) {
   $scope.projectHead = 'Djado Ivan';
   $scope.projectDescription = 'The 70 year old "Djado Ivan" lives in Grivitsa, a small bulgarian town close to the romanian border. In close communion with nature and his many animals, he spends his life on his small farm and thereby maintainins his very own rythm of life. In order to portray his life, Silke Meya (Director) and Laura Mentgen (Director of Photography) spent one month with Ivan in Bulgaria where they were able to capture his philosophy of life.';
   $scope.sublineProject = 'Documentary, 20 minutes, Bulgaria, Germany';

   // $scope.immediate = { video: $sce.trustAsResourceUrl('startPage_Video') };

   //  $scope.getVideoUrl = function(video, ext) {
   //    return video && $sce.trustAsResourceUrl('/video/' + video + ext);
   //  };
   $scope.immediate = { video: $sce.trustAsResourceUrl('https://player.vimeo.com/video/117572459?api=1&player_id=player1') };

   $scope.getVideoUrl = function(video) {
      return video && $sce.trustAsResourceUrl('https://player.vimeo.com/video/117572459?api=1&player_id=player1');
   };
}]);

angular.module('noumiaApp')
.controller('leniCtrl', ["$scope", "$sce", function ($scope, $sce) {
   $scope.projectHead = 'Leni';
   $scope.projectDescription = 'Der Film ,,Leni” ist eine Tanzperformance der besonderen Art. Auf einem Berliner Trödel- markt führt die Performance- und Lebenskünstlerin Leni ein improvisiertes Tanzritual auf. Durch eine selbstgebastelte Pferdekopfmaske von der Außenwelt abgeschottet,horcht sie in sich hinein und spürt auf diese Weise immer neue Bewe- gungen in sich aufkommen. Mit anrührender Ehrlichkeit ber- ichtet sie von ihrer intensiven Selbsterfahrung.';
   $scope.sublineProject = '';

   $scope.immediate = { video: $sce.trustAsResourceUrl('https://player.vimeo.com/video/43307090?api=1&player_id=player1') };

   $scope.getVideoUrl = function(video) {
      return video && $sce.trustAsResourceUrl('https://player.vimeo.com/video/43307090?api=1&player_id=player1');
   };
}]);


angular.module('noumiaApp')
.controller('oisCtrl', ["$scope", function ($scope) {
 $scope.projectHead = 'ois';
 $scope.projectDescription = 'This is the text about my OIS Project';
 $scope.mainImage = '/images/hej_title.jpg';
}]);

angular.module('noumiaApp')
.controller('n2kCtrl', ["$scope", function ($scope) {
   $scope.projectHead = 'Nice 2 Know';
   $scope.projectDescription = 'Nice 2 Know is a berlin based webapp';
   $scope.sublineProject = '2012 @btk, 2.Semester';
   $scope.mainImage = '/images/n2k/n2k_logo.jpg';
   $scope.projectImages = [
   {image: 'images/n2k/n2k-1.jpg', description: 'n2k 01'},
   {image: 'images/n2k/n2k-2.jpg', description: 'n2k 02'},
   {image: 'images/n2k/n2k-3.jpg', description: 'n2k 05'},
   {image: 'images/n2k/n2k-4.jpg', description: 'n2k 04'},
   {image: 'images/n2k/n2k-5.jpg', description: 'n2k 05'},
   {image: 'images/n2k/n2k-6.jpg', description: 'n2k 06'},
   {image: 'images/n2k/n2k-7.jpg', description: 'n2k 07'}
   ];
}]);

angular.module('noumiaApp')
.controller('waywCtrl', ["$scope", function ($scope) {
   $scope.projectHead = 'Why Are You Watching';
   $scope.projectDescription = 'Wroking with one Microsoft Kinect and 2 Arduinos the machine tries to follow every person who stands infront of it.';
   $scope.sublineProject = '2012 @btk, 3.Semester';
   $scope.mainImage = '/images/wayw/wayw-7.jpg';
   $scope.projectImages = [
   {image: 'images/wayw/wayw-6.jpg', description: 'wayw 01'},
   {image: 'images/wayw/wayw-2.jpg', description: 'wayw 08'},
   {image: 'images/wayw/wayw-3.jpg', description: 'wayw 05'},
   {image: 'images/wayw/wayw-4.jpg', description: 'wayw 04'},
   {image: 'images/wayw/wayw-5.jpg', description: 'wayw 05'},
   {image: 'images/wayw/wayw-1.jpg', description: 'wayw 06'}
   ];
}]);


angular.module('noumiaApp')
.controller('tronicCtrl', ["$scope", function ($scope) {
   $scope.projectHead = 'Tronic';
   $scope.projectDescription = 'Wroking with one Microsoft Kinect and 2 Arduinos the machine tries to follow every person who stands infront of it.';
   $scope.sublineProject = '2012 @btk, 3.Semester';
   $scope.mainImage = '/images/tronic/tronic-1.jpg';
   $scope.projectImages = [
   {image: 'images/tronic/tronic-6.jpg', description: 'tronic 01'},
   {image: 'images/tronic/tronic-2.jpg', description: 'tronic 08'},
   {image: 'images/tronic/tronic-3.jpg', description: 'tronic 05'},
   {image: 'images/tronic/tronic-4.jpg', description: 'tronic 04'},
   {image: 'images/tronic/tronic-5.jpg', description: 'tronic 05'},
   {image: 'images/tronic/tronic-8.jpg', description: 'tronic 08'},
   {image: 'images/tronic/tronic-7.jpg', description: 'tronic 06'}
   ];
}]);
