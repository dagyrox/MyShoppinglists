'use strict';

angular.module('myShoppinglistApp')
.controller
(
	'StoresCtrl'
	, function ($http) 
	{
	  	var vm = this;

	  	vm.allStores = [];
	  	vm.selectedStore = {};
	  	vm.updateMode = false;

	  	vm.Add_Update = Add_Update;
	  	vm.SelectStore = SelectStore;
	  	vm.DeleteStore = DeleteStore;

	  	Init();

	  	function Init()
	  	{
	  		GetAllStores();
	  	}

	  	function Add_Update()
	  	{
			vm.updateMode ? 
				UpdateStore(vm.selectedStore) : 
				AddStore(vm.selectedStore);

			vm.selectedStore = {};
	  	}

		function AddStore(store)
		{
			$http.post('/api/stores', store)
			.success
				(
					function()
					{
						GetAllStores();
					}
				);
		};

		function UpdateStore(store)
		{
			$http.put('/api/stores/' + store._id, store)
			.success
				(
					function()
					{
						GetAllStores();
						vm.updateMode = false;
					}
				);
		};

		function GetAllStores ()
		{
		    $http.get('/api/stores')
		    .success
		    	(
		    		function(allStores) 
		    		{
		    			vm.allStores = allStores;
		    		}
	    		);
		}

		function SelectStore(store)
		{
			vm.selectedStore = store;

			vm.updateMode = true;
		}

		function DeleteStore(store)
		{
			$http.delete('/api/stores/' + store._id)
			.success
				(
					function()
					{
						GetAllStores();
					}
				);
		}
  	}
);
