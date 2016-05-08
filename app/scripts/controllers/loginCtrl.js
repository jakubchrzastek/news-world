'use strict';

angular.module('newsApp')
.controller('loginCtrl', ['$scope', '$location', 'UserValid', 
	function($scope, $location, UserValid){

	$scope.signIn = function (login, password){
		UserValid.signIn(login,password)
			.then(function(response){
				console.log(UserValid.userData);
			//poprawna odpowiedz serwera
			if(UserValid.userData.role==='admin')
				$location.path('/admin/lastNews');
			else
				$location.path('/user/lastNews');
		}, function(response){
			//niepoprawna odpowiedz serwera
			swal("Some Error!", "You need fix your mistake", "error");
		});
	};

 	console.log("loginCtrl");

}]);