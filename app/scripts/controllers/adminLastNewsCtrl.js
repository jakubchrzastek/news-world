'use strict';

angular.module('newsApp')
	.controller('adminLastNewsCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news').success(function(data){

        $scope.lastNews = data;
   });

}]);