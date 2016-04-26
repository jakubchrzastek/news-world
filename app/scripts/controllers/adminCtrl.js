'use strict';

angular.module('newsApp')
	.controller('adminCtrl', [ '$scope', function($scope){

		$scope.adminMenu = [
			{
				icon: 'fa fa-newspaper-o',
				state: 'admin.lastNews',
				text: 'Last News'
			},

			{
				icon: 'fa fa-wrench',
				state: 'admin.manageArticles',
				text: 'Manage Articles'
			},

			{	
				icon: 'fa fa-times-circle',
				state: 'logout',
				text: 'Logout'
			}
		]

	}]);