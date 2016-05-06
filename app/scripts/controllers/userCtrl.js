'use strict';

angular.module('newsApp')
	.controller('userCtrl', [ '$scope', '$location', 'UserValid', 
		function($scope, $location, UserValid){

		if(UserValid.userData.role!=='user')
			$location.path('/login');

		$scope.userMenu = [
			{
				icon: 'fa fa-newspaper-o',
				state: 'user.lastNews',
				text: 'Last News'
			},

			{
				icon: 'fa fa-wrench',
				state: 'user.findNews',
				text: 'Find News'
			},

			{	
				icon: 'fa fa-times-circle',
				state: 'logout',
				text: 'Logout'
			}
		]

	}]);