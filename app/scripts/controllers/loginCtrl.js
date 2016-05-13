'use strict';

angular.module('newsApp')
	.controller('loginCtrl', ['$scope', '$location', 'ValidationService', 
	function($scope, $location, ValidationService){
		$scope.signIn = function (login, password){
			ValidationService.signIn(login,password)
			.then(function(response){
				//poprawna odpowiedz serwera
				if(ValidationService.userData.role==='admin')
					$location.path('/admin/news');
				else{
					if(ValidationService.userData.categories_set){
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