'use strict';

/**
 * @ngdoc overview
 * @name reflectionsApp
 * @description
 * # reflectionsApp
 *
 * Main module of the application.
 */
angular
  .module('reflectionsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'firebase',
    'dressStore',
    'cart',
    'dressStoreAdmin'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }) .when('/angStudies', {
        templateUrl: 'views/angularStudies.html',
        controller: 'AngStudiesCtrl'
      }).when('/menu', {
        templateUrl: 'views/menu.html'

      }).when('/dressstore', {
        templateUrl: 'views/dressstore.html',
        controller: 'dressCtrl'

      }).when('/reservation', {
        templateUrl: 'views/reserve.html',
        controller: 'mainController'

      })
      .when('/checkout', {
        templateUrl: 'views/checkoutSummary.html',
        controller:'cartSummaryController'

      }).when('/complete', {
        templateUrl: 'views/summary.html'

      }).when('/placeorder', {
        templateUrl: 'views/placeOrder.html',
        controller: 'dressCtrl'

      }).when('/adminOrders', {
        templateUrl: 'views/adminOrders.html'

      }).when('/adminProducts', {
        templateUrl: 'views/adminProducts.html'

      })
    .when('/firebaseStudies', {
        templateUrl: 'views/firebaseStudies.html',
        controller: 'FireBaseStudiesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
