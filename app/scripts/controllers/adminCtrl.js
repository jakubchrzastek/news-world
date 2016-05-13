'use strict';

angular.module('newsApp')
	.controller('adminCtrl', [ '$scope', '$location', 'ValidationService', 
		function($scope, $location, ValidationService) {

		if(ValidationService.userData.role!=='admin')
			$location.path('/login');

		$scope.adminMenu = [
			{
				icon: 'fa fa-newspaper-o',
				state: 'admin.news',
				text: 'General News'
			},

			{
				icon: 'fa fa-wrench',
				state: 'admin.manageArticles',
				text: 'Manage Articles'
			},

			{
				icon: 'fa fa-users',
				state: 'admin.manageUsers',
				text: 'Manage Users'
			},

			{	
				icon: 'fa fa-times-circle',
				state: 'logout',
				text: 'Logout'
			}
		];

	}]);