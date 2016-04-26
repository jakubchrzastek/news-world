'use strict';

angular.module('newsApp')
	.controller('logoutCtrl', ['$scope','$location', function($scope, $location){
		$location.path('/login');
	}]);