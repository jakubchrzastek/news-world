'use strict';

angular.module('newsApp', ['ui.router', 'ngMessages'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})
			.state('setcategory', {
				url: '/setcategory',
				templateUrl: 'templates/setcategory.html',
				controller: 'setCategoryCtrl'
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
			.state('admin.news', {
				url: '/news',
				templateUrl: 'templates/news.html',
				controller: 'newsCtrl'
			})
			.state('admin.manageArticles', {
				url: '/manage/articles',
				templateUrl: 'templates/admin-managearticles.html',
				controller: 'adminManageArticlesCtrl'
			})
			.state('admin.manageUsers', {
				url: '/manage/users',
				templateUrl: 'templates/admin-manageusers.html',
				controller: 'adminManageUsersCtrl'
			})
			.state('user', {
				url: '/user',
				templateUrl: 'templates/user.html',
				controller: 'userCtrl'
			})
			.state('user.news', {
				url: '/news',
				templateUrl: 'templates/news.html',
				controller: 'newsCtrl'
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
			.state('guest.news', {
				url: '/news',
				templateUrl: 'templates/news.html',
				controller: 'newsCtrl'
			});

		$urlRouterProvider.otherwise('/login');
	})
	.run(['$rootScope', 'ValidationService', '$http', '$location', 
		function($rootScope, ValidationService, $http, $location){	
			ValidationService.isSignedIn().then(function(userData) {
	    		$location.path('/' + userData.role);
			}, 
			function(){
			    $location.path('/login');
			});
	}]);
