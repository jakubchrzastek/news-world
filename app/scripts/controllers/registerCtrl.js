'use strict';

angular.module('newsApp')
    .controller('registerCtrl', ['$scope', '$state', 'ValidationService', function($scope, $state, ValidationService){
        $scope.signUp = function(login, email, password, passwordRepeat){
            ValidationService.signUp(login, email, password, passwordRepeat)
                .then(function(response){
                    //poprawna odpowiedz serwera
                    $state.go('login');
                }, function(response){
                    //niepoprawna odpowiedz serwera
                    $state.go('register');
                });
        };
    }]);
    