'use strict';

angular.module('myShoppinglistApp')
  .controller('DialogController', function ($scope, $mdDialog, $http) {

    var vm = this;

    //model
    vm.list = {active:true};
    vm.list.name = '';
    vm.list.info = '';
    vm.list.budget = 0;

    vm.CloseDialog = CloseDialog;
    vm.AddList = AddList;

  function CloseDialog() 
  {
    $mdDialog.hide();
  }

  
  function AddList() 
  {
    if(Object.keys(vm.list).length != 4) 
    {
      return;
    }

    $http.post
    (
      '/api/shoppinglists', 
      vm.list
    );

    vm.list = {active:true};
    $mdDialog.hide();
  }

});
