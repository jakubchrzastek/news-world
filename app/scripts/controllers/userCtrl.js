'use strict';

angular.module('newsApp')
	.controller('userCtrl', [ '$scope', '$state', 'ValidationService', 
		function($scope, $state, ValidationService){

		if(ValidationService.userData.role!=='user')
			$state.go('login');

		$scope.userMenu = [
			{
				icon: 'fa fa-trophy',
				state: 'user.topnews',
				text: 'Top10 News'
			}, {
				icon: 'fa fa-heart-o',
				state: 'user.mynews',
				text: 'My News'
			}, {
				icon: 'fa fa-newspaper-o',
				state: 'user.news',
				text: 'General News'
			}, {
				icon: 'fa fa-user',
				state: 'user.profile',
				text: 'My profile'
			}, {	
				icon: 'fa fa-times-circle',
				state: 'logout',
				text: 'Logout'
			}
		];

	}]);