/**
 * Created by Ajit Menon on 23-02-2016.
 */
'use strict';
angular.module('reflectionsApp')
  .controller('FireBaseStudiesCtrl', function ($scope,$firebaseArray,$window) {
    $scope.test2 =['ravi','raj','don'];
    var ref = new $window.Firebase('https://reflectingshadows.firebaseio.com/');

   // var ref = new $window.Firebase('https://indiandressstore.firebaseio.com/');

    $scope.messages = $firebaseArray(ref);
    $scope.addMessage = function(e) {

      //LISTEN FOR RETURN KEY
      if (e.keyCode === 13 && $scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var name = $scope.name || 'anonymous';
       var place = $scope.place || 'anonymous';



       $scope.messages.$add({ from: name, body: $scope.msg,place:place });
        //RESET MESSAGE
        $scope.msg = '';

      }
    };
  });
