'use strict';

angular.module('myShoppinglistApp')
  .controller('StoreDialogController', function ($scope, $mdDialog, $http) {

    var vm = this;

    //model
    vm.store = {active:true};
    vm.store.name = '';
    vm.store.description= '';
    vm.store.street = '';
    vm.store.city = '';
    vm.store.state = '';
    // vm.store.geocode = '';
  
    //functions
    vm.CloseDialog = CloseDialog;
    vm.AddItem = AddItem;

    function CloseDialog() 
    {
      $mdDialog.hide();
    }

  
    function AddItem() 
    {
      if(vm.store == null) 
      {
        return;
      }

      $http.post
      (
        '/api/stores',
        vm.store        
      );

      vm.store = {active:true};

      $mdDialog.hide();
    }
    
});
