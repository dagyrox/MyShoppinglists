'use strict';

angular.module('myShoppinglistApp')
  .controller('ShoppinglistCtrl', function ($scope, $location, $http) {
  	var queryString = $location.search();
  	var thisShoppinglist;

  	$http.get('/api/shoppinglist/'+queryString.id).success(function(data){$scope.thisShoppinglist = data; alert(thisShoppinglist._id);});
 
    $scope.message = 'Hello';
  });
