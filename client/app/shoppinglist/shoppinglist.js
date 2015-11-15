'use strict';

angular.module('myShoppinglistApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/shoppinglist', {
        templateUrl: 'app/shoppinglist/shoppinglist.html',
        controller: 'ShoppinglistCtrl'
      });
  });

function setCheckboxes(e)
{
	var checked = $(e).is(':checked');

	$('input[name=listChkBx]').each(function(){
		var thisChecked = $(this).is(':checked');

		if(checked != thisChecked)
		{
			$(this).trigger('click');
		}
	});
}