'use strict';
 
angular.module('newsApp')
    .controller('setCategoryCtrl' , [ '$scope' , '$location', '$http', 'ValidationService', 
        function($scope, $location, $http, ValidationService){
        $http.get('http://news-world.iiar.pwr.edu.pl/api/v1/categories/', {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token')
            }
        }).success(function(response){
            $scope.Categories = response.categories;
            $scope.model = (new Array($scope.Categories.length)).fill(false);
        });
 
        $scope.sendCategory = function(model){
            var zaznaczoneId = [];
            $scope.model.forEach(function(v, i) {
                if(v) zaznaczoneId.push($scope.Categories[i].id);
            });
 
            $http.put('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/', {  
                user: {
                    category_ids: zaznaczoneId
                }
            }, {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            }).success(function(){
                if(zaznaczoneId!=""){
                swal("Well done", "You have set your preferences", "success")
                $location.path('/user/news');
                }
                else{
                    swal("", "Please choose your category preferencess next time", "warning");
                    $location.path('/user/news');
                }
            });
 
        };
       
    }]);