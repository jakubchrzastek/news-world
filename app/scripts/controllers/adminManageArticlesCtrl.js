'use strict';

angular.module('newsApp')
	.controller('adminManageArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
	
    	$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/').success(function(data){
        
            $scope.ManageArticles = data;

        });

    	$scope.deleteNews = function ($index, headers) {

            var newsId = $scope.ManageArticles.news[$index].id;

            $http.delete('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + newsId ,{
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
                })
            .success(function(){
                swal("Good job!", "You delete article", "success")        	
            });
        };

}]);