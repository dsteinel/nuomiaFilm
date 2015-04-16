'use strict';

/**
 * @ngdoc function
 * @name noumiaApp.controller:mainCtrl
 * @description
 * # hejCtrl
 * Controller of the noumiaApp
 */
 angular.module('noumiaApp')
 .controller('ivanCtrl', function ($scope) {
   $scope.projectHead = 'ivanCtrl';
   $scope.projectDescription = 'This is the text about my #hej Project';
   $scope.video = '/video/startPage_Video.mp4';
   $scope.sublineProject = '2015 @btk, Bachelor';
 });
 angular.module('noumiaApp')
 .controller('oisCtrl', function ($scope) {
  $scope.projectHead = 'ois';
  $scope.projectDescription = 'This is the text about my OIS Project';
  $scope.mainImage = '/images/hej_title.jpg';
});

 angular.module('noumiaApp')
 .controller('n2kCtrl', function ($scope) {
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
 });

 angular.module('noumiaApp')
 .controller('waywCtrl', function ($scope) {
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
 });


 angular.module('noumiaApp')
 .controller('tronicCtrl', function ($scope) {
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
 });
