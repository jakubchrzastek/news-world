'use strict';

angular.module('newsApp')
	.controller('topNewsCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/news/top/').success(function(response){
	        $scope.topNews = response.news;
	   	});

		$scope.clearInput = function (){
	        $scope.searchFilter = "";
	    };

	    $http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/').success(function(response){
	        $scope.topCategories = response.user.categories;
	   	});
	}]);

	