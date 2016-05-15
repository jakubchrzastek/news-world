'use strict';

angular.module('newsApp')
	.controller('adminManageArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
    	$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/').success(function(response){
            $scope.ManageArticles = response.news;
        });

        $http.get('http://news-world.iiar.pwr.edu.pl/api/v1/categories/').success(function(response){
            $scope.Categories = response.categories;
        });

        $scope.clearInput = function (){
            $scope.searchFilter = "";
        }
        
    	$scope.deleteNews = function (articleId) {
            swal({   
            title: "Are you sure?", 
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Yes, delete it!",   
            closeOnConfirm: false 
            }, 
            function(){  
               for(var i = 0; i < $scope.ManageArticles.length; i++) {
                    if($scope.ManageArticles[i].id == articleId){
                        var index = i;
                        $http.delete('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + articleId).then(function(){
                            $scope.ManageArticles.splice(index ,1);
                            swal("Deleted!", "Article has been removed", "success");         
                        }); 
                    }
                }       
            });
        };
    }]);