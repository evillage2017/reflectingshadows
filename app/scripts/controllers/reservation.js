'use strict';
/**
 * Created by Ajit Menon on 08-03-2016.
 */
angular.module('reflectionsApp')
  .controller('mainController', function($scope, $firebaseArray,$window) {

    // our application code will go here
    var ref = new $window.Firebase('https://amber-fire-7373.firebaseio.com/days');
    $scope.days = $firebaseArray(ref);

    $scope.reset = function() {

      $scope.days.$add({
        monday: {
          name: 'Monday',
          slots: {
            0900: {
              time: '9:00am',
              booked: false
            },
            1100: {
              time: '11:00am',
              booked: false
            }
          }
        },
        tuesday: {
          name: 'Tuesday',
          slots: {
            0900: {
              time: '9:00am',
              booked: false
            },
            1100: {
              time: '11:00am',
              booked: false
            }
          }
        }
      });

    };
  });
