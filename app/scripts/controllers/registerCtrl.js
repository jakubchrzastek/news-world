'use strict';

angular.module('newsApp')
    .controller('registerCtrl', ['$scope', '$location', 'UserValid', function($scope,$location,UserValid){

    $scope.signUp = function(login, email, password, passwordRepeat){
        UserValid.signUp(login, email, password, passwordRepeat)
        .then(function(response){
            console.log(UserValid.createData);
        //poprawna odpowiedz serwera
        if(UserValid.createData.success)
        {
            swal("Great Job!", "You create Your account", "success");
            $location.path('/login');
        }
        else
        {
            swal("Some Error!", "You need fix your mistake", "error");
            $location.path('/register');
        }
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