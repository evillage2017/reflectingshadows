/**
 * Created by Ajit Menon on 06-03-2016.
 */
/**
 * Created by Ajit Menon on 28-02-2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webappliedApp
 */
angular.module('dressStoreAdmin',[])
  .controller('ordersCtrl', function ($scope, $http, $firebaseArray,$window) {

    $scope.orders = {};
    var ref = new $window.Firebase('https://indiandressstore.firebaseio.com/orders');
    $scope.orders = $firebaseArray(ref);


    $scope.selectedOrder='';
    $scope.selectOrder = function(order) {
      $scope.selectedOrder = order;
    };
    $scope.calcTotal = function(order) {
      var total = 0;
      for (var i = 0; i < order.products.length; i++) {
        total +=
          order.products[i].count * order.products[i].price;
      }
      return total;
    };
  }).controller('productCtrl', function ( $scope,$firebaseArray,$window) {
    var ref = new $window.Firebase('https://indiandressstore.firebaseio.com/Products');
    $scope.listProducts = function () {
      $scope.products =$firebaseArray(ref);
    };
    $scope.startEdit = function (product) {

      $scope.editedProduct = product;
      $scope.editFlag = true;
    };
    $scope.cancelEdit = function () {
      $scope.editedProduct = null;
    };
    $scope.createProduct = function (product) {
        console.log('product' +product);
      $scope.messages = $firebaseArray(ref);

      var name = product.name;
      var description = product.description;
      var category = product.category;
      var vertical = product.vertical;
      var price = product.price;
      var imageUrl = product.imageUrl;
      var fit = product.fit;
      var audience = product.audience;
      var partnumber = product.partnumber;

      console.log('name' +name);




      $scope.messages.$add({ name: name,partnumber:partnumber,fit:fit,category: category,description: description,imageUrl: imageUrl,price: price,vertical: vertical,audience:audience  });
      $scope.editedProduct = null;
    };


    $scope.updateProduct = function (product) {


      var name = product.name;
      var description = product.description;
      var category = product.category;
      var vertical = product.vertical;
      var price = product.price;
      var imageUrl = product.imageUrl;
      var fit = product.fit;
      var audience = product.audience;
      var partnumber = product.partnumber;
      var id =product.$id;
      console.log('id' +id);
      //var ref = new $window.Firebase('https://indiandressstore.firebaseio.com/Products/'+id);
      var ref1 = new $window.Firebase('https://indiandressstore.firebaseio.com/Products/'+id);
      //$scope.messages = $firebaseArray(ref);
     ref.on('value', function(snapshot) {
       var key = snapshot.key();
       console.log('key' +key);

      }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
      });
      //var myUser = ref.child(partnumber);

      ref1.update({name: name,partnumber:partnumber,fit:fit,category: category,description: description,imageUrl: imageUrl,price: price,vertical: vertical,audience:audience });

      $scope.editedProduct = null;
    };

    $scope.deleteProduct = function (product) {

      $scope.products.$remove(product);
      $scope.products.splice($scope.products.indexOf(product), 1);
      /*var partnumber = product.partnumber;
      var ref = new $window.Firebase('https://indiandressstore.firebaseio.com/Products');
      var myUser = ref.child(partnumber);

      myUser.remove();
        $scope.products.splice($scope.products.indexOf(product), 1);*/

    };


    $scope.listProducts();


  });



