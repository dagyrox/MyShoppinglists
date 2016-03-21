'use strict';

angular.module('myShoppinglistApp')
  .controller
(
  'ShoppinglistCtrl'
  , function ($scope, $location, $http, $mdDialog) 
    {

      var vm = this;
      vm.queryString = $location.search();

      vm.thisShoppinglist = '';
      vm.iconMap = {"true":"maps:beenhere", "false":"action:done"};

      $http.get('/api/shoppinglists/'+vm.queryString.id).success(
        function(data)
        {
          vm.thisShoppinglist = data; 

          /*$http.get('/api/user/'+vm.thisShoppinglist.owner).then(
            function(data){
              vm.listOwner = data; 
            },function(data)
            {});*/
        }
      );

      $http.get('/api/stores').success(
        function(data)
        {
          vm.allStores = data; 
        }
      );

      $http.get('/api/items').success(
        function(data)
        {
          vm.allItems = data; 
        }
      );

      vm.newAdd = function()
      {
        var data = 
        {
          name:vm.selectedItem.name,
          description:vm.selectedItem.description,
          store : 
            {
              name:vm.selectedStore.name, 
              description:vm.selectedStore.description,
              street:vm.selectedStore.street,
              city:vm.selectedStore.city,
              state:vm.selectedStore.state,
              geocode:vm.selectedStore.geocode,
            },
          cost : vm.selectedItem.cost,
          taxflag : vm.selectedItem.taxflag,
          done:false
        };

        vm.addItem(data);

        vm.newLabel = "Added: " + data;


      };

      vm.saveChanges = function ()
      {
        $http.put('/api/shoppinglists/'+vm.thisShoppinglist._id, vm.thisShoppinglist);
        console.log(vm.thisShoppinglist._id);
      };

      vm.deleteItem = function(item)
      {
        var index = vm.thisShoppinglist.listItems.indexOf(item);
        vm.thisShoppinglist.listItems.splice(index, 1);
        //$http.put('/api/shoppinglists/'+vm.thisShoppinglist._id, vm.thisShoppinglist);
      };

      vm.addItem = function(data)
      {
        vm.thisShoppinglist.listItems.push(data);
        $http.put('/api/shoppinglists/'+vm.thisShoppinglist._id, vm.thisShoppinglist);
      };

      //mdDialog

/*
    var alert;

    vm.showAlert = showAlert;
    vm.showDialog = showCustomGreeting;
    vm.listItems=[1,2,3];

    // Dialog #1 - Show simple alert dialog and cache
    // reference to dialog instance

    function showAlert() {
      alert = $mdDialog.alert()
        .title('Attention, ' + vm.userName)
        .content('This is an example of how easy dialogs can be!')
        .ok('OK');

      $mdDialog
          .show( alert )
          .finally(function() {
            alert = undefined;
          });
    }


    function showCustomGreeting($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog aria-label="Add Item Dialog">' +
           '  <md-dialog-content>'+
           '    <md-list>'+
           '      <md-list-item ng-repeat="item in items">'+
           '       <p>Number {{item}}</p>' +
           '      '+
           '    </md-list-item></md-list>'+
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         locals: {
           items: vm.listItems
         },
         controller: DialogController
      });

      function DialogController($scope, $mdDialog, items) {
        vm.listItems = items;
        vm.closeDialog = function() {
          $mdDialog.hide();
        }
      }

    }*/

    }
);