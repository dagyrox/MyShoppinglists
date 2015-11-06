'use strict';

angular.module('myShoppinglistApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/shoppinglist', {
        templateUrl: 'app/shoppinglist/shoppinglist.html',
        controller: 'ShoppinglistCtrl'
      });
  });
