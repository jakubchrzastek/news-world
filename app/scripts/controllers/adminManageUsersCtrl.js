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
            console.log($scope.ManageUsers);
        });

    	$scope.deleteUsers = function ($index) {

            var userId = $scope.ManageUsers.users[$index].id;
            console.log(userId);
            $http.delete('http://news-world.iiar.pwr.edu.pl/api/v1/users/' + userId ,{
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
                }).success(function(){
                $scope.ManageUsers.users.splice($index,1);
                swal("Good job!", "You delete user", "success");     	
            });
        };

}]);