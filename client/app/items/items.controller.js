'use strict';

angular.module('myShoppinglistApp')
  .controller('ItemsCtrl', function ($http) {
	  	var vm = this;

	  	vm.allItems = [];

	  	vm.NewAdd = NewAdd;
	  	vm.AddItem = AddItem;
	  	vm.GetAllItems = GetAllItems;

	  	Init();

	  	function Init()
	  	{
	  		GetAllItems();
	  	}

	  	function NewAdd()
	  	{
	  		var newItem = 
	  			{
	  				name: 	vm.newName,
					description: 	vm.newDescription,
					category: 	vm.newCategory,
					size: 	vm.newSize,
					active: 	true
				};

			AddItem(newItem);

			vm.newName = "";
			vm.newDescription = "";
			vm.newCategory = "";
			vm.newSize = "";
	  	}

		function AddItem(data)
		{
			$http.post('/api/items', data).success(function(){alert('item added'); GetAllItems();});
		};

		function GetAllItems ()
		{
		    $http.get('/api/items').success(function(allItems) {
		      vm.allItems = allItems;
		    });
		}
  });
