'use strict';

angular.module('myShoppinglistApp')
  .controller
(
  'ShoppinglistCtrl'
  , function ($scope, $location, $http, $mdDialog) 
    {
      var queryString = $location.search();

      $scope.thisShoppinglist = '';
      $scope.iconMap = {"true":"maps:beenhere", "false":"action:done"};

      $http.get('/api/shoppinglist/'+queryString.id).success(
        function(data)
        {
          $scope.thisShoppinglist = data; 

          /*$http.get('/api/user/'+$scope.thisShoppinglist.owner).then(
            function(data){
              $scope.listOwner = data; 
            },function(data)
            {});*/
        }
      );

      $scope.newAdd = function()
      {
        var data = 
        {
          name:$scope.newItemName,
          description:$scope.newItemDescription,
          store : 
            {
              name:$scope.newStore, 
              description:'Target in odessa, 54 n veterans',
              street:'123 spooner st',
              city:'land o lakes',
              state:'fl',
              geocode:'28.1862503,-82.5445883'
            },
          cost : $scope.newCost,
          taxflag : $scope.newTax,
          done:false
        };

        $scope.addItem(data);

        $scope.newLabel = "Added: " + data;


      };

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

      $scope.addItem = function(data)
      {
        $scope.thisShoppinglist.items.push(data);
        $http.put('/api/shoppinglist/'+$scope.thisShoppinglist._id, $scope.thisShoppinglist);
      };

      //mdDialog


    var alert;

    $scope.showAlert = showAlert;
    $scope.showDialog = showCustomGreeting;
    $scope.items=[1,2,3];

    // Dialog #1 - Show simple alert dialog and cache
    // reference to dialog instance

    function showAlert() {
      alert = $mdDialog.alert()
        .title('Attention, ' + $scope.userName)
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
           items: $scope.items
         },
         controller: DialogController
      });

      function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }

    }

    }
);