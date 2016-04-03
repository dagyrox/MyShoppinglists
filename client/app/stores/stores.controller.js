'use strict';

angular.module('myShoppinglistApp')
.controller
(
	'StoresCtrl'
	, function ($http) 
	{
	  	var vm = this;

	  	vm.NewAdd = NewAdd;
	  	vm.AddSore = AddStore;


	  	function NewAdd()
	  	{
	  		var newStore = {name: 	vm.newName,
							info: 	vm.newDescription,
							street: 	vm.newStreet,
							city: 	vm.newCity,
							state: 	vm.newState,
							geocode: vm.newGeocode,
							active: 	true};

			AddStore(newStore);

			vm.newName = "";
			vm.newDescription = "";
			vm.newStreet = "";
			vm.newCity = "";
			vm.newState = "";
			vm.newGeocode = "";
	  	}

		function AddStore(data)
		{
			$http.post('/api/stores', data);
		};

  	}
);
