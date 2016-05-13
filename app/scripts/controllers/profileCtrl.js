'use strict';

angular.module('newsApp')
	.controller('profileCtrl', ['$http', '$scope', function($http, $scope){
		$scope.sendEmail = function(email){
			$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/users/me/',
			{
	    		user: {
	        email: email
	    		}
			},
			
			{
	        	headers: {
	            Authorization: 'Token ' + localStorage.getItem('token')
	        	}
			}
		).success(function(){
			swal("Success!", "You successfull change your email adress", "success");
		}).error(function(){
			swal("Some Error!", "You need fix your mistake", "error");
		})};
	}]);
