'use strict';
 
angular.module('newsApp')
    .controller('setCategoryCtrl' , [ '$scope' , '$state', '$http', 'ValidationService', 'baseUrl',
        function($scope, $state, $http, ValidationService, baseUrl){
            
        $http.get(baseUrl + '/api/v1/categories/').success(function(response){
            $scope.Categories = response.categories;
            $scope.model = (new Array($scope.Categories.length)).fill(false);
        });
 
        $scope.sendCategory = function(model){
            var zaznaczoneId = [];
            $scope.model.forEach(function(v, i) {
                if(v) zaznaczoneId.push($scope.Categories[i].id);
            });
 
            $http.put(baseUrl + '/api/v1/users/me/', {  
                user: {
                    category_ids: zaznaczoneId
                }
            }).then(function(){
                if(zaznaczoneId!=""){
                    swal("Well done", "You have set your preferences", "success")
                $state.go('user.news');
                }
                else{
                    swal("", "Please choose your category preferencess next time", "warning");
                    $state.go('user.news');
                }
            });
        };   
    }]);