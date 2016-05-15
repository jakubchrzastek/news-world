'use strict';

angular.module('newsApp')
	.controller('myNewsCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/news/').success(function(response){
		    $scope.myNews = response.news;
		});

		$scope.clearInput = function (){
	        $scope.searchFilter = "";
	    };

	    $http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/').success(function(response){
	        $scope.myCategories = response.user.categories;
	   	});
	}]);

	