'use strict';

angular.module('newsApp')
    .controller('registerCtrl', ['$scope', '$location', 'UserValid', function($scope,$location,UserValid){
        $scope.signUp = function(login, email, password, passwordRepeat){
            UserValid.signUp(login, email, password, passwordRepeat)
                .then(function(response){
                    //poprawna odpowiedz serwera
                    $location.path('/login');
                }, function(response){
                    //niepoprawna odpowiedz serwera
                    $location.path('/register');
                });
        };
    }]);
    