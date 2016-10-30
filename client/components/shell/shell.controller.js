'use strict';

angular.module('myShoppinglistApp')
  .controller('ShellCtrl', function ($mdSidenav, $mdDialog, $scope, $location, Auth) {

    var vm = this;
    vm.path = $location.path();

    // vm.ShowAddDialog = ShowAddDialog;

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };

    var originatorEv;
    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    $scope.notificationsEnabled = true;
    $scope.toggleNotifications = function() {
      $scope.notificationsEnabled = !$scope.notificationsEnabled;
    };

    $scope.redial = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .content('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
        );
      originatorEv = null;
    };

    $scope.checkVoicemail = function() {
      // This never happens.
    };

    $scope.ShowAddDialog = function($event) {
      var parentEl = angular.element(document.body);
      var templateUrl = '';
      var controller = '';
      var controllerAs = '';

      switch(vm.path)
      {
        case '/':
          {
            templateUrl = 'components/shell/dialog/dialog.html';
            controller = 'DialogController';
            controllerAs = 'dialog';
          }
          break;
        case '/items':
          {
            templateUrl = 'components/shell/dialog/itemDialog.html';
            controller = 'ItemDialogController';
            controllerAs = 'itemDialog';
          }
          break;
        case '/stores':
          {
            templateUrl = 'components/shell/dialog/storeDialog.html';
            controller = 'StoreDialogController';
            controllerAs = 'storeDialog';
          }
          break;
      }

      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        templateUrl: templateUrl,
        controller: controller,
        controllerAs: controllerAs
      });

    };
  });
