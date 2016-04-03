'use strict';

angular.module('myShoppinglistApp')
  .controller('DialogController', function ($scope, $mdDialog, $http) {
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };

  
  $scope.addThing = function() {
    if($scope.newThing === '') {
      return;
    }
    $http.post('/api/shoppinglists', { name: $scope.newThing, info: $scope.newDescription, budget: $scope.newBudget });
    $scope.newThing = '';
    $mdDialog.hide();
  };
});
