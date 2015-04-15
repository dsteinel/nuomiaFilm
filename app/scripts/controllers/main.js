'use strict';

/**
 * @ngdoc function
 * @name dsteinel2015App.controller:mainCtrl
 * @description
 * # hejCtrl
 * Controller of the dsteinel2015App
 */
 angular.module('dsteinel2015App')
 .controller('hejCtrl', function ($scope) {
   $scope.projectHead = '#hej';
   $scope.projectDescription = 'This is the text about my #hej Project';
   $scope.mainImage = '/images/hej/hej_0.jpg';
   $scope.sublineProject = '2015 @btk, Bachelor';
   $scope.projectImages = [
   {image: 'images/hej/hej_1.jpg', description: 'Hej 01'},
   {image: 'images/hej/hej_2.jpg', description: 'Hej 02'},
   {image: 'images/hej/hej_5.jpg', description: 'Hej 05'},
   {image: 'images/hej/hej_4.jpg', description: 'Hej 04'}
   ];
 });
 angular.module('dsteinel2015App')
 .controller('oisCtrl', function ($scope) {
  $scope.projectHead = 'ois';
  $scope.projectDescription = 'This is the text about my OIS Project';
  $scope.mainImage = '/images/hej_title.jpg';
});

 angular.module('dsteinel2015App')
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

 angular.module('dsteinel2015App')
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


 angular.module('dsteinel2015App')
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
