'use strict';

angular.module('newsApp')
	.controller('adminManageArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
	
    	$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/').success(function(response){
        
            $scope.ManageArticles = response;

        });

    	$scope.deleteNews = function ($index) {

            var newsId = $scope.ManageArticles.news[$index].id;

            $http.delete('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + newsId ,{
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
                }).success(function(){
                swal("Good job!", "You delete article", "success");
                $scope.ManageArticles.news.splice($index,1);   	
            }).error(function(){
                swal("Something wrong!", "Try again latter", "error");
            });
        };

}]);