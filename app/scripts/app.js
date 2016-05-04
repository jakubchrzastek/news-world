'use strict';

angular.module('newsApp', ['ui.router', 'ngMessages'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
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
				templateUrl: 'templates/lastnews.html',
				controller: 'lastNewsCtrl'
			})
			.state('admin.manageArticles', {
				url: '/manageArticles',
				templateUrl: 'templates/admin-managearticles.html',
				controller: 'adminManageArticlesCtrl'
			})
			.state('user', {
				url: '/user',
				templateUrl: 'templates/user.html',
				controller: 'userCtrl'
			})
			.state('user.lastNews', {
				url: '/lastnews',
				templateUrl: 'templates/lastnews.html',
				controller: 'lastNewsCtrl'
			})
			.state('article', {
				url: '/article/:articleId',
				templateUrl: 'templates/article.html',
				controller: 'fullArticleCtrl'
			})
			.state('guest', {
				url: '/guest',
				templateUrl: 'templates/guest.html',
				controller: 'guestCtrl'
			})
			.state('guest.lastNews', {
				url: '/lastnews',
				templateUrl: 'templates/lastnews.html',
				controller: 'lastNewsCtrl'
			});

		$urlRouterProvider.otherwise('/login');

		console.log("routeLoad");
	});