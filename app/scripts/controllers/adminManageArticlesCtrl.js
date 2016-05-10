'use strict';

angular.module('newsApp')
	.controller('adminManageArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
	
    	$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/').success(function(response){
            $scope.ManageArticles = response.news;
        });

    	$scope.deleteNews = function ($index) {
            swal({   
            title: "Are you sure?", 
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Yes, delete it!",   
            closeOnConfirm: false 
            }, 
            function(){  
                var articleId = $scope.ManageArticles[$index].id;
                $http.delete('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + articleId ,
                    {
                        headers: {
                            Authorization: 'Token ' + localStorage.getItem('token')
                        }
                    }).success(function(){
                        $scope.ManageArticles.splice($index,1);        
                    }); 
                        swal("Deleted!", "Article has been removed", "success"); 
            });
        };

}]);