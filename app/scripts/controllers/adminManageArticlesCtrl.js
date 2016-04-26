'use strict';

angular.module('newsApp')
	.controller('adminManageArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$http.get('http://news-world.iiar.pwr.edu.pl/news').success(function(data2){
    
        $scope.news2Data = data2;
    });

	$scope.deleteArticle = function (index) {
		var ArticleID = $scope.article.index;
        $http.delete('/news/' + ArticleID)
        .success(function(data){
    	$scope.news2Data.splice(index,1); });

    };

}]);