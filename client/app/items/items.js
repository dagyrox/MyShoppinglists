'use strict';

angular.module('myShoppinglistApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/items', {
        templateUrl: 'app/items/items.html',
        controller: 'ItemsCtrl'
      });
  });
