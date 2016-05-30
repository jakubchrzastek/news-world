'use strict';

angular.module('newsApp')
	.controller('myNewsCtrl', ['$scope', '$http', 'baseUrl',function ($scope, $http, baseUrl) {
		$http.get(baseUrl + '/api/v1/users/me/news/').success(function(response){
		    $scope.myNews = response.news;
		});

		$scope.clearInput = function (){
	        $scope.searchFilter = "";
	    };

	    $http.get(baseUrl + '/api/v1/users/me/').success(function(response){
	        $scope.myCategories = response.user.categories;
	   	});
	}]);

	