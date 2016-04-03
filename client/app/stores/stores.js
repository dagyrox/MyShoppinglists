'use strict';

angular.module('myShoppinglistApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/stores', {
        templateUrl: 'app/stores/stores.html',
        controller: 'StoresCtrl'
      });
  });
