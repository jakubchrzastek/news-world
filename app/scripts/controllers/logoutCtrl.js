'use strict';

angular.module('newsApp')
	.controller('logoutCtrl', ['$scope','$state', function($scope, $state){
		$state.go('login');
		sessionStorage.clear();
	}]);