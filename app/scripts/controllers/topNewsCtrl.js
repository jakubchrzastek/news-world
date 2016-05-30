'use strict';

angular.module('newsApp')
	.controller('topNewsCtrl', ['$scope', '$http', 'baseUrl', function ($scope, $http, baseUrl) {
		$http.get(baseUrl + '/api/v1/users/me/news/top/').success(function(response){
	        $scope.topNews = response.news;
	   	});

		$scope.clearInput = function (){
	        $scope.searchFilter = "";
	    };

	    $http.get(baseUrl + '/api/v1/users/me/').success(function(response){
	        $scope.topCategories = response.user.categories;
	   	});
	}]);

	