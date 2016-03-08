/**
 * Created by Ajit Menon on 22-02-2016.
 */
'use strict';

angular.module('reflectionsApp')
  .controller('AngStudiesCtrl', function ($scope,localStorageService) {
    var playersInStore = localStorageService.get('players');

    $scope.players = playersInStore || [];

    $scope.$watch('players', function () {
      localStorageService.set('players', $scope.players);
    }, true);

    $scope.addPlayers = function () {
      $scope.players.push($scope.player);
      $scope.player = '';
    };

    $scope.removePlayer = function (index) {
      $scope.players.splice(index, 1);
    };
  });
