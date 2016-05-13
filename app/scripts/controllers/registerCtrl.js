'use strict';

angular.module('newsApp')
    .controller('registerCtrl', ['$scope', '$location', 'ValidationService', function($scope, $location, ValidationService){
        $scope.signUp = function(login, email, password, passwordRepeat){
            ValidationService.signUp(login, email, password, passwordRepeat)
                .then(function(response){
                    //poprawna odpowiedz serwera
                    $location.path('/login');
                }, function(response){
                    //niepoprawna odpowiedz serwera
                    $location.path('/register');
                });
        };
    }]);
    