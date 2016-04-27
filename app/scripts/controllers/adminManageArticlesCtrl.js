'use strict';

angular.module('newsApp')
	.controller('adminManageArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
	
    	$http.get('http://news-world.iiar.pwr.edu.pl/news').success(function(data){
        
            $scope.ManageArticles = data;
        });

    	$scope.deleteArticle = function (index) {

    		var articleID = $scope.ManageArticles[$index].id;
                $http.delete('/news/' + articleID)
            .success(function(data){
        	   $scope.ManageArticles.splice(index,1); 
            });
        };

}]);