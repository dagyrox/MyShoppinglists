'use strict';

angular.module('myShoppinglistApp')
  .controller('ItemDialogController', function ($scope, $mdDialog, $http) {

    var vm = this;

    //model
    vm.item = {active:true};
    vm.item.name = '';
    vm.item.description= '';
    vm.item.category = '';
    vm.item.size = '';
  
    //functions
    vm.CloseDialog = CloseDialog;
    vm.AddItem = AddItem;

    function CloseDialog() 
    {
      $mdDialog.hide();
    }

  
    function AddItem() 
    {
      if(vm.item == null) 
      {
        return;
      }

      $http.post
      (
        '/api/items',
        vm.item        
      );

      vm.item = {active:true};

      $mdDialog.hide();
    }
    
});
