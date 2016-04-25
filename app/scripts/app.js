'use strict';

angular.module('newsApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			});

		$urlRouterProvider.otherwise('/');
	});