'use strict';

/**
 * @ngdoc function
 * @name reflectionsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the reflectionsApp
 */
angular.module('reflectionsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
