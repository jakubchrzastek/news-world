'use strict';

	angular.module('newsApp')
		.controller('fullArticleCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
     		
		$http.get('http://news-world.iiar.pwr.edu.pl/news/' + $stateParams.articleId).then(function(response){
    	
    		console.log(response);

    		$scope.article = response.data.news
    	});
    
}]);
