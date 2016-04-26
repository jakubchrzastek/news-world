'use strict';

angular.module('newsApp', ['ui.router', 'ngMessages'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})
			.state('logout', {
				url: '/logout',
				controller: 'logoutCtrl'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'templates/register.html',
				controller: 'registerCtrl'
			})
			.state('admin', {
				url: '/admin',
				templateUrl: 'templates/admin.html',
				controller: 'adminCtrl'
			})
			.state('admin.lastNews', {
				url: '/lastNews',
				templateUrl: 'templates/admin-lastnews.html',
				controller: 'adminLastNewsCtrl'
			})
			.state('admin.manageArticles', {
				url: '/managearticles',
				templateUrl: 'templates/admin-managearticles.html',
				controller: 'adminManageArticlesCtrl'
			});

		$urlRouterProvider.otherwise('/login');

		console.log("routeLoad");
	});