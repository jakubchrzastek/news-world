
'use strict'
 
angular.module('newsApp')
    .controller('setCategoryCtrl' , [ '$scope' , '$location', '$http', 'UserValid', function($scope, $location, $http, UserValid){
 	
 		$scope.dane = [];
 		
        $http.get('http://news-world.iiar.pwr.edu.pl/api/v1/categories/', {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token')
            }
        }).success(function(response){
            $scope.Categories = response.categories;
            $scope.tablica = (new Array($scope.Categories.length)).fill(false);
        });
 
        $scope.sendCategory = function(tablica){
            var zaznaczoneId = [];
            $scope.tablica.forEach(function(v, i) {
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
            console.info('Zaznaczone ID: ', zaznaczoneId);
            swal("Well done", "You have set your preferences", "success")
            $location.path('/user/lastNews');
        });
 
        };
       
    }]);