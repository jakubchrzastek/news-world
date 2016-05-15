'use strict';


angular.module('newsApp')
	.factory('httpRequestInterceptor',['$rootScope', function($rootScope){
		return {
			request: function($config) {
				if(localStorage.getItem('token')){
					$config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');
				}
				return $config;
			}
		};
	}])
	.config(['$httpProvider', function($httpProvider) {
    	$httpProvider.interceptors.push('httpRequestInterceptor');
	}]);