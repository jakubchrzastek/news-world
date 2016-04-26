angular.module('newsApp')
	.controller('adminLastNewsCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$http.get('http://news-world.iiar.pwr.edu.pl/news').success(function(data){

        $scope.newsData = data;
   });

}]);