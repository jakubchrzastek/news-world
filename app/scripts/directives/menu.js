'use strict';

angular.module('newsApp')
	.directive('menu', [function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/_menu.html',
			scope: {
				content: '='
			},
			link: function($scope, $element, $attrs) {
				console.log($scope.content);
			}
		}
	}]);