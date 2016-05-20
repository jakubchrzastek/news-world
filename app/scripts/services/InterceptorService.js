'use strict';


angular.module('newsApp')
	.factory('httpRequestInterceptor',['$rootScope', function($rootScope){
		return {
			request: function($config) {
				if(sessionStorage.getItem('token')){
					$config.headers['Authorization'] = 'Token ' + sessionStorage.getItem('token');
				}
				return $config;
			}
		};
	}])
	.config(['$httpProvider', function($httpProvider) {
    	$httpProvider.interceptors.push('httpRequestInterceptor');
	}]);