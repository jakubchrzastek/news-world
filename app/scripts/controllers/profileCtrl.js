'use strict';

angular.module('newsApp')
	.controller('profileCtrl', ['$http', '$scope', 'baseUrl', function($http, $scope, baseUrl){
		$scope.model = [];

		$http.get(baseUrl + '/api/v1/users/me/').success(function(response){
			$scope.userData = response.users;
			sessionStorage.setItem('email', response.user.email);
		});

		$http.get(baseUrl + '/api/v1/categories/').success(function(response){
            $scope.Categories = response.categories;
            $scope.model = (new Array($scope.Categories.length)).fill(false);
        });

		$scope.editEmail = function(new_email){
			if(sessionStorage.getItem('email')!==new_email){
				$http.put(baseUrl + '/api/v1/users/me/',{
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
				$http.post(baseUrl + '/api/v1/users/me/password/',{
						user: {
							original_password: current,
							new_password: new_password, new_passwordRepeat
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
 
            $http.put(baseUrl + '/api/v1/users/me/', {  
                user: {
                    category_ids: zaznaczoneId
                }
            }).success(function(){
                if(zaznaczoneId!=""){
                	swal("", "Your category have been changed", "success");
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
