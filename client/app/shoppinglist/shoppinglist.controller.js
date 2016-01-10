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
        var data = 
        {
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

      $scope.test = function()
      {
        alert('hi');
      }

      //mdDialog


    var alert;

    $scope.showAlert = showAlert;
    $scope.closeAlert = closeAlert;
    $scope.showGreeting = showCustomGreeting;

    $scope.hasAlert = function() { return !!alert };
    $scope.userName = $scope.userName || 'Bobby';

    // Dialog #1 - Show simple alert dialog and cache
    // reference to dialog instance

    function showAlert() {
      alert = $mdDialog.alert()
        .title('Attention, ' + $scope.userName)
        .content('This is an example of how easy dialogs can be!')
        .ok('Close');

      $mdDialog
          .show( alert )
          .finally(function() {
            alert = undefined;
          });
    }

    // Close the specified dialog instance and resolve with 'finished' flag
    // Normally this is not needed, just use '$mdDialog.hide()' to close
    // the most recent dialog popup.

    function closeAlert() {
      $mdDialog.hide( alert, "finished" );
      alert = undefined;
    }

    // Dialog #2 - Demonstrate more complex dialogs construction and popup.

    function showCustomGreeting($event) {
        $mdDialog.show({
          targetEvent: $event,
          template:
            '<md-dialog>' +
            '  <md-content>Hello {{ employee }}!</md-content>' +
            '  <div class="md-actions">' +
            '    <md-button ng-click="closeDialog()">' +
            '      Close Greeting' +
            '    </md-button>' +
            '  </div>' +
            '</md-dialog>',
          controller: 'GreetingController',
          onComplete: afterShowAnimation,
          locals: { employee: $scope.userName }
        });

        // When the 'enter' animation finishes...

        function afterShowAnimation(scope, element, options) {
           // post-show code here: DOM element focus, etc.
        }
    }

    }
);
