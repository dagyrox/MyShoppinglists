'use strict';

angular.module('myShoppinglistApp')
  .controller('ItemDialogController', function ($scope, $mdDialog, $http) {

    var vm = this;
  
    vm.CloseDialog = CloseDialog;

    function CloseDialog() {
      $mdDialog.hide();
    };

  
  $scope.addThing = function() {
    if($scope.newItem === '') {
      return;
    }
    $http.post('/api/items', { name: $scope.newThing, info: $scope.newDescription, budget: $scope.newBudget });
    $scope.newThing = '';
    $mdDialog.hide();
  };
});
