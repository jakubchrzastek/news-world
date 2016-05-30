'use strict';

angular.module('newsApp')
	.controller('newsCtrl', ['$scope', '$http', 'baseUrl', function ($scope, $http, baseUrl) {
		$http.get(baseUrl + '/api/v1/news').success(function(response){
	        $scope.News = response.news;
	   	});

		$scope.clearInput = function (){
	        $scope.searchFilter = "";
	    };

	    $http.get(baseUrl + '/api/v1/categories/').success(function(response){
	        $scope.Categories = response.categories;
	   	});

	}]);

	