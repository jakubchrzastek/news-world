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
			}, {
				//headers: {
				//	Authorization: 'Token blalalala' 
				//}
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
			var promise2 = $q.defer(); //nowy promise
			var account = this;
			$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/users/sign_up', {		
				user: {
					login: login,
					email: email,
					password: password,
					password_confirmation: passwordRepeat
				}
			}).success(function(response){
				account.createData = response;
				console.log("Zarejestrowano!");
			}).error(function(){
				console.log("Nie udało się!");
				promise2.reject(response);
			});

			return promise2.promise;
		}

	}

	}]);