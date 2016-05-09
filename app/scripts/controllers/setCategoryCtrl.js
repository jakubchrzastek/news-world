'use strict'

angular.module('newsApp')
	.controller('setCategoryCtrl' , [ '$scope' , '$location', '$http', 'UserValid', function($scope, $location, $http, UserValid){

		$scope.tablica = [];

		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/categories/',
            {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            }).success(function(response){
        
            $scope.Categories = response;
        });

        $scope.sendCategory = function(tablica){
        	var zaznaczoneId = [];
    			$scope.tablica.forEach(function(v, i) {
        			if(v) zaznaczoneId.push($scope.Categories.categories[i]);
    			});
 
    	console.info('Zaznaczone ID: ', zaznaczoneId[0].id);

		$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/',
			{	
				"user": 
					{"category_ids": [zaznaczoneId[0].id]}
			},

			{
				headers: {
	                Authorization: 'Token ' + localStorage.getItem('token')
	            }
	        }).success(function(){
	        	console.log('Dane wysłane!');
	        	$location.path('/user/lastNews');
	        });

        };
		
	}]);