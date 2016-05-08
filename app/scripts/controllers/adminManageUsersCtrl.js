'use strict';

angular.module('newsApp')
	.controller('adminManageUsersCtrl', ['$scope', '$http', function ($scope, $http) {
	
    	$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/',
            {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
            }).success(function(response){
        
            $scope.ManageUsers = response;

        });

    	$scope.deleteUsers = function ($index, headers) {

            var userId = $scope.ManageUsers.users[$index].id;

            $http.delete('http://news-world.iiar.pwr.edu.pl/api/v1/users/' + userId ,{
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
                }).success(function(){
                swal("Good job!", "You delete user", "success")        	
            });
        };

}]);