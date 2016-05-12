'use strict';

angular.module('newsApp')
.controller('loginCtrl', ['$scope', '$location', 'UserValid', 
	function($scope, $location, UserValid){
		$scope.signIn = function (login, password){
			UserValid.signIn(login,password)
			.then(function(response){
				//poprawna odpowiedz serwera
				if(UserValid.userData.role==='admin')
					$location.path('/admin/news');
				else{
					if(UserValid.userData.categories_set){
						$location.path('/user/news');
					}
					else{
						$location.path('/setcategory');
					}
				} 
			}, function(response){
				//niepoprawna odpowiedz serwera
				swal("Some Error!", "You need fix your mistake", "error");
			});
		};
	}]);