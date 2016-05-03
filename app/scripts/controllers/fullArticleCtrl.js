'use strict';

	angular.module('newsApp')
		.controller('fullArticleCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
     		
		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId)
			.then(function(response){
    	
    		$scope.article = response.data.news
    	});

    	$scope.backTo = function() {
  			window.history.back();
		};
    
}]);
