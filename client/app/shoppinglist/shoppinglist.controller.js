'use strict';

angular.module('myShoppinglistApp')
  .controller('ShoppinglistCtrl', function ($scope, $location, $http) {
  	var queryString = $location.search();

  	$scope.thisShoppinglist = '';

  	$http.get('/api/shoppinglist/'+queryString.id).success(
  		function(data){
  			$scope.thisShoppinglist = data; 

		  	/*$http.get('/api/user/'+$scope.thisShoppinglist.owner).then(
		  		function(data){
		  			$scope.listOwner = data; 
		  		},function(data)
		  		{});*/
  		});
 
    $scope.message = 'Hello';

    $scope.setCheckboxes = function(id)
    {
      var checked = $scope.master;
      var query = 'input[name=listChkBx-'+id+']';

      $(query).each(function(){
        var thisChecked = $(this).is(':checked');

        if(checked != thisChecked)
        {
          $(this).trigger('click');
        }
      });
    };
  });
