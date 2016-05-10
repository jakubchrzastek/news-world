'use strict';

angular.module('newsApp')
	.controller('adminManageUsersCtrl', ['$scope', '$http', function ($scope, $http) {
	
    	$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/users/',
            {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
            }).success(function(response){
                $scope.ManageUsers = response.users;
            });
    	
        $scope.deleteUsers = function ($index) {
            swal({   
            title: "Are you sure?", 
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Yes, delete it!",   
            closeOnConfirm: false 
            }, 
            function(){  
                var userId = $scope.ManageUsers[$index].id;
                $http.delete('http://news-world.iiar.pwr.edu.pl/api/v1/users/' + userId ,{
                        headers: {
                            Authorization: 'Token ' + localStorage.getItem('token')
                        }
                    }).success(function(){
                        $scope.ManageUsers.splice($index,1);        
                    }); 
                        swal("Deleted!", "User has been removed", "success"); 
            });

        };
    }]);

