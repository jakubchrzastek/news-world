'use strict';

angular.module('newsApp')
	.service('UserValid', ['$q', '$http', function($q, $http){

	return{

		userData: {},
		createData: {},

		signIn: function(login,password){
			var promise = $q.defer(); //nowy promise
			var self = this;
			$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/users/sign_in', {		
				user: {
					login: login,
					password: password
				}
			}).error(function(response, status ,headers){
				promise.reject(response); // sprawia ze promise przestaje oczekiwać
			}).success(function(response, headers){
				self.userData = response.user; // do userdata przypisujemy token/role/categoryset
				localStorage.setItem('token', response.user.session.token);
				promise.resolve(response);
			});

			return promise.promise;
		},

		signUp: function(login, email, password, passwordRepeat){
			var promise = $q.defer();
			var self = this;
			$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/users/sign_up', {		
				user: {
					login: login,
					email: email,
					password: password,
					password_confirmation: passwordRepeat
				}
			}).success(function(response){
				if(response.success){   
                        swal("Great Job!", "You create Your account", "success");
                        promise.resolve(response);
                    }
                    else{
                        swal("Some Error!", "You need fix your mistake", "error");
                    	promise.reject(response);
                    }
			}).error(function(){
				promise.reject(response);
			});

			return promise.promise;
		},

				
		isSignedIn: function() {
        	var promise = $q.defer();
            if(this.role) promise.resolve();
            else {
 
                if(!localStorage.getItem('token')) promise.reject();
 
                else {
                var self = this;
         
                    $http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/me', {
                        headers: {
                            Authorization: 'Token ' + localStorage.getItem('token')
                        }
                    }).success(function(response) {
                        if(response.success) {
                            self.userData = response.user;
                            promise.resolve(self.userData);
                        }
                        else {
                            promise.reject();
                        }
                    }).error(function(err) {
                        promise.reject(err);
                    });
                }
            }
         
            return promise.promise;
        }

	}

	}]);