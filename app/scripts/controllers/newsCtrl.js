'use strict';

angular.module('newsApp')
	.controller('newsCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news').success(function(response){
	        $scope.News = response.news;
	   	});

		$scope.clearInput = function (){
	        $scope.searchFilter = "";
	    };

	    $http.get('http://news-world.iiar.pwr.edu.pl/api/v1/categories/').success(function(response){
	        $scope.Categories = response.categories;
	   	});

	}]);

	