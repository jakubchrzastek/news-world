'use strict';

angular.module('newsApp')
	.controller('profileCtrl', ['$http', '$scope', function($http, $scope){
		
		$scope.model = [];

		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/').success(function(response){
			$scope.userData = response.users;
			localStorage.setItem('email', response.user.email);
		});

		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/categories/').success(function(response){
            $scope.Categories = response.categories;
            $scope.model = (new Array($scope.Categories.length)).fill(false);
        });

		$scope.editEmail = function(new_email){
			if(localStorage.getItem('email')!==new_email){
				$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/',
				{
		    		user: {
				        email: new_email
				    }
				}).success(function(){
					swal("Success!", "You successfull change your email adress", "success");
				}).error(function(){
					swal("Some Error!", "You need fix your mistake", "error");
				});
			} 
			else{
				swal("Error!", "You choose the same email!" , "error");
			};
			
		};

		$scope.editPassword = function(current, new_password, new_passwordRepeat){
			if(current!==new_password){
				$http.post('http://news-world.iiar.pwr.wroc.pl/api/v1/users/me/password/',
					{
						user: {
							original_password: current,
							new_password: new_password, new_passwordRepeat
						}
					},
					{
						headers: {
							Authorization: 'Token ' + localStorage.getItem('token')
						}
				}).success(function(){
					swal("Success!", "You successfull change your password", "success");
				}).error(function(){
					swal("Some Error!", "Problem with communication to the server", "error");
				});
			}
			else{
				swal("Error!", "You choose the same password!" , "error");
			};
		};

		$scope.editCategory = function(model){
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
                swal("", "Your category have been changed", "success")
                }
                else{
                	console.log('zero zmian kategorii'); 
                }
            });
 
        };

        $scope.isChecked = function(model){
        	return $scope.model.every(function(e) { 
        		return e === false; 
        	});
        };
	}]);
