'use strict';

angular.module('newsApp')
	.controller('adminManageArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
	
    	$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/').success(function(data){
        
            $scope.ManageArticles = data;
    
        });

    	$scope.deleteArticle = function (index) {

    		//var articleID = $scope.ManageArticles.news[index].id;

                $http.delete('http://news-world.iiar.pwr.edu.pl/api/v1/news/1')
            .success(function(data){
        	   $scope.ManageArticles.splice(index,1); 
            });
        };

}]);