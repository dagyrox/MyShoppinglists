'use strict';

angular.module('myShoppinglistApp')
  .controller('MainCtrl', function ($scope, $location, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/shoppinglist').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('shoppinglist', $scope.awesomeThings);
    });

    $scope.getColor = function($index) {
      var _d = ($index + 1) % 11;
      var bg = '';

      switch(_d) {
        case 1:       bg = 'red';         break;
        case 2:       bg = 'green';       break;
        case 3:       bg = 'darkBlue';    break;
        case 4:       bg = 'blue';        break;
        case 5:       bg = 'yellow';      break;
        case 6:       bg = 'pink';        break;
        case 7:       bg = 'darkBlue';    break;
        case 8:       bg = 'purple';      break;
        case 9:       bg = 'deepBlue';    break;
        case 10:      bg = 'lightPurple'; break;
        default:      bg = 'yellow';      break;
      }

      return bg;
    };

    $scope.getSpan = function($index) {
      /*var _d = ($index + 1) % 11;

      if (_d === 1 || _d === 5) {
        return 2;
      }*/
      return $index == 0 ? 2 : 1;
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/shoppinglist/' + thing._id);
    };

    $scope.goToShoppinglist = function(gotoid)
    {
      $location.search({id:gotoid});
      $location.path('/shoppinglist');
    }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('shoppinglist');
    });
  });
