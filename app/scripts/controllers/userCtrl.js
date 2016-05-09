'use strict';

angular.module('newsApp')
	.controller('userCtrl', [ '$scope', '$location', 'UserValid', 
		function($scope, $location, UserValid){

		if(UserValid.userData.role!=='user')
			$location.path('/login');

		$scope.userMenu = [
			{
				icon: 'fa fa-user-secret',
				state: 'user.lastNews',
				text: 'My News'
			},

			{
				icon: 'fa fa-newspaper-o',
				state: 'user.lastNews',
				text: 'General News'
			},
			
			{	
				icon: 'fa fa-times-circle',
				state: 'logout',
				text: 'Logout'
			}
		]

	}]);