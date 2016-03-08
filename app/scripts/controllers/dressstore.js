/**
 * Created by Ajit Menon on 06-03-2016.
 */
'use strict';
angular.module('dressStore',['customFilters','cart'])
  .constant('productListActiveClass', 'btn-primary')
  .constant('productListPageCount', 3)
  .controller('dressCtrl', function ($scope,productListActiveClass,productListPageCount,$firebaseArray,$window,cart) {
   /* $scope.data = {
      products: [
        { name: 'Product #1', description: 'A product',
          category: 'Category #1', price: 100 },
        { name: 'Product #2', description: 'A product',
          category: 'Category #1', price: 110 },
        { name: 'Product #3', description: 'A product',
          category: 'Category #2', price: 210 },
        { name: 'Product #4', description: 'A product',
          category: 'Category #3', price: 202 }]
    };*/
    $scope.data = {};
    var ref = new $window.Firebase('https://indiandressstore.firebaseio.com/Products');
    $scope.data.products = $firebaseArray(ref);
    console.log('loh');
   /* var ref = new $window.Firebase('https://indiandressstore.firebaseio.com');
// Attach an asynchronous callback to read the data at our posts reference
    ref.on('value', function(snapshot) {
      var newPost = snapshot.val();
      console.log('Author: ' + newPost.name);
      console.log('Title: ' + newPost.description);
      $scope.data.products = newPost;
    }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code);
    });*/




    var selectedCategory = null;
    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;
    $scope.selectCategory = function (newCategory) {
      selectedCategory = newCategory;
      $scope.selectedPage = 1;
    };
    $scope.selectPage = function (newPage) {
      $scope.selectedPage = newPage;
    };
    $scope.getPageClass = function (page) {
      return $scope.selectedPage === page ? productListActiveClass : '';
    };
    $scope.categoryFilterFn = function (product) {
      return selectedCategory === null ||
        product.category === selectedCategory;
    };
    $scope.getCategoryClass = function (category) {
      return selectedCategory === category ? productListActiveClass : '';
    };
    $scope.addProductToCart = function (product) {
      cart.addProduct(product.partnumber, product.name, product.price);
    };


  }).controller('saveCtrl', function ($scope,$firebaseArray,$window,cart,$location) {
    var ref = new $window.Firebase('https://indiandressstore.firebaseio.com/orders');
    $scope.messages = $firebaseArray(ref);
    $scope.sendOrder = function (shippingDetails) {
      var order = angular.copy(shippingDetails);
      order.products = cart.getProducts();
      var name = order.name;
      var city = order.city;
      var country = order.country;
      var products = order.products;
      var state = order.state;
      var street = order.street;
      var zip = order.zip;



      /* $scope.messages.$add({ from: name, body: $scope.msg,place:place });*/
      $scope.messages.$add({ name: name,city:city,country: country,products:products,state: state,street: street,zip: zip  });
console.log(ref);
      $location.path('/complete');
    };

  });
