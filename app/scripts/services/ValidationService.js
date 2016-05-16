'use strict';

angular.module('newsApp')
	.service('ValidationService', ['$q', '$http', function($q, $http){

	return{

		userData: {},
		createData: {},

		signIn: function(login,password){
			var promise = $q.defer(); //nowy promise
			var self = this;
			$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/users/sign_in/', {		
				user: {
					login: login,
					password: password
				}
			}).error(function(response, status ,headers){
				promise.reject(response); // sprawia ze promise przestaje oczekiwać
			}).success(function(response, headers){
				self.userData = response.user; // do userdata przypisujemy token/role/categoryset
				sessionStorage.setItem('token', response.user.session.token);
				promise.resolve(response);
			});

			return promise.promise;
		},

		signUp: function(login, email, password, passwordRepeat){
			var promise = $q.defer();
			var self = this;
			$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/users/sign_up/', {		
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
			}).error(function(response){
				promise.reject(response);
			});

			return promise.promise;
		},

				
		isSignedIn: function() {
            var promise = $q.defer();
    			// Sprawdza, czy zalogowany i czy ma dane użytkownika w pamięci
			    if(this.role) 
			    	promise.resolve(); // Jeśli tak, od razu kończy oczekiwanie sukcesem
			    else {
			        // Jeśli nie ma danych, sprawdza czy jest token w pamięci
			        if(!sessionStorage.getItem('token')=='') 
			        	promise.reject(); // Jeśli nie ma, znaczy na 100% nie jest zalogowany
			        else {
			            // Jest token w pamięci
			            var self = this;
			            // Wykonuje zapytanie do API, która na postawie tokenu zwraca dane użytkownika
			            $http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/', {
			                headers: {
			                    Authorization: 'Token ' + sessionStorage.getItem('token')
			                }
			            }).success(function(response) {
			                // Wypełnia ValidationService.userData danymi użytkownika i kończy oczekiwanie 
			                self.userData = response.user;
			                promise.resolve(self.userData);
			            }).error(function(response) {
			                promise.reject(response);
			            });
			        }
			    }
			 
			return promise.promise;
		}

	}

	}]);


	