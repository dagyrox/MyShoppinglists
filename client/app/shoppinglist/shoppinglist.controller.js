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
      //$http.put('/api/shoppinglist/'+$scope.thisShoppinglist._id, $scope.thisShoppinglist);
    };

    $scope.addItem = function()
    {
      var data = {
                    name:"Water-24pk",
                    description:"24 pack of water",
                    store : 
                      {
                        name:'Target - Odessa1', 
                        description:'Target in odessa, 54 n veterans',
                        street:'123 spooner st',
                        city:'land o lakes',
                        state:'fl',
                        geocode:'28.1862503,-82.5445883'
                      },
                    cost : 10.00,
                    taxflag : false,
                    done:false
                  };

      $scope.thisShoppinglist.items.push(data);
      $http.put('/api/shoppinglist/'+$scope.thisShoppinglist._id, $scope.thisShoppinglist);
    };
 
    $scope.message = 'Hello';

      $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };

  });
