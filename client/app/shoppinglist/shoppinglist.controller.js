'use strict';

angular.module('myShoppinglistApp')
  .controller('ShoppinglistCtrl', function ($scope, $location, $http) {
  	var queryString = $location.search();

  	$scope.thisShoppinglist = '';
    $scope.iconMap = {"true":"restore", "false":"done"};

  	$http.get('/api/shoppinglist/'+queryString.id).success(
  		function(data){
  			$scope.thisShoppinglist = data; 

		  	/*$http.get('/api/user/'+$scope.thisShoppinglist.owner).then(
		  		function(data){
		  			$scope.listOwner = data; 
		  		},function(data)
		  		{});*/
  		});

    $scope.saveChanges = function ()
    {
      $http.put('/api/shoppinglist/'+queryString.id).success
      ( function(){ alert('saved'); });
    };
 
    $scope.message = 'Hello';

  });
