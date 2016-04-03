'use strict';

angular.module('myShoppinglistApp')
  .controller('StoresCtrl', function ($scope) {
  	var vm = this;

  	vm.NewAdd = NewAdd;


  	function NewAdd(){alert('hi');}
  });
