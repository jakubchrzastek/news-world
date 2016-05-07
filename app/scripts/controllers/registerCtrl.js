'use strict';

angular.module('newsApp')
    .controller('registerCtrl', ['$scope', 'UserValid', function($scope,UserValid){

    $scope.signUp = function(login, email, password, passwordRepeat){
        UserValid.signUp(login, email, password, passwordRepeat)
        .then(function(response){
            console.log(UserValid.createData);
        //poprawna odpowiedz serwera
        if(UserValid.account.createData.success)
            $location.path('/login');
        else
            $location.path('/register');
    }, function(response){
        //niepoprawna odpowiedz serwera
    });
};

	console.log('registerCtrl');
}])
    .directive('pwCheck', [function () {
    	return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    ctrl.$setValidity('pwmatch', elem.val() === $(firstPassword).val());
                    });
            });
    	}
    }
}]); 