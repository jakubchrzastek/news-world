'use strict';

angular.module('newsApp')
	.controller('guestCtrl', [ '$scope', function($scope){
		$scope.guestMenu = [
			{
				icon: 'fa fa-newspaper-o',
				state: 'guest.lastNews',
				text: 'Last News'
			},
			
			{	
				icon: 'fa fa-times-circle',
				state: 'logout',
				text: 'Logout'
			}
		];
	}]);