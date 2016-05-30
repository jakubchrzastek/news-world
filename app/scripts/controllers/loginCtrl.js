'use strict';

angular.module('newsApp')
	.controller('loginCtrl', ['$scope', '$state', 'ValidationService', 
	function($scope, $state, ValidationService){
		$scope.signIn = function (login, password){
			ValidationService.signIn(login,password)
			.then(function(response){
				//poprawna odpowiedz serwera
				if(ValidationService.userData.role==='admin')
					$state.go('admin.news');
				else{
					if(ValidationService.userData.categories_set){
						$state.go('user.news');
					}
					else{
						$state.go('setcategory');
					}
				} 
			}, function(response){
				//niepoprawna odpowiedz serwera
				swal("Some Error!", "You need fix your mistake", "error");
			});
		};
	}]);