'use strict';

angular.module('myShoppinglistApp')
  .controller('ShoppinglistCtrl', function ($scope, $location, $http) {
  	var queryString = $location.search();

  	$scope.thisShoppinglist = '';
    $scope.iconMap = {"true":"maps:beenhere", "false":"action:done"};

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
      $http.put('/api/shoppinglist/'+$scope.thisShoppinglist._id, $scope.thisShoppinglist);
      console.log($scope.thisShoppinglist._id);
    };

    $scope.deleteItem = function(item)
    {
      var index = $scope.thisShoppinglist.items.indexOf(item);
      $scope.thisShoppinglist.items.splice(index, 1);
    };

    $scope.addItem = function()
    {
      alert('popup modal that lets us make a selection and add');
    };
 
    $scope.message = 'Hello';

  });
