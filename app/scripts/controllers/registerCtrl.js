'use strict';

angular.module('newsApp')
.controller('registerCtrl', ['$scope', function($scope){
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