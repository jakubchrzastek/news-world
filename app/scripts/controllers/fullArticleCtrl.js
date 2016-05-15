'use strict';

angular.module('newsApp')
	.controller('fullArticleCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId,
			{
				headers: {
					Authorization: 'Token ' + localStorage.getItem('token')
				}
			}).then(function(response){
			$scope.article = response.data.news;			
		});

		$scope.backTo = function() {
			window.history.back();
		};

		$scope.like = function(){
			if($scope.article.voted==null){
				$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/votes', 
					{
						vote: { 
							value: true
						}
					},
					{
						headers: {
							Authorization: 'Token ' + localStorage.getItem('token')
						}
				}).success(function(response){
					swal({ title: "You like this!", timer: 1500,type: "success", showConfirmButton: false});
					console.log("wyslano po raz 1 - like");
					$scope.article.voted = true;
				}).error(function(){
					console.log("niewyslano po raz 1 - like");
				});
			} else if($scope.article.voted==false) {
				$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/votes', 
					{
						vote: { 
							value: true
						}
					},
					{
						headers: {
							Authorization: 'Token ' + localStorage.getItem('token')
						}
				}).success(function(){
					swal({ title: "You like this!", timer: 1500,type: "success", showConfirmButton: false});
					$scope.article.voted = true;
				}).error(function(){
					console.log("");
				});
			}
			else{
				console.log("nie mozna glosowac 2 razy");
			}
		};

		$scope.dislike = function(){
			if($scope.article.voted==null){
				$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/votes', 
					{
						vote: { 
							value: false
						}
					},
					{
						headers: {
							Authorization: 'Token ' + localStorage.getItem('token')
						}
				}).success(function(){
					swal({ title: "You dislike this!", timer: 1500,type: "error", showConfirmButton: false});
					console.log("wyslano po raz 1 - dislike");
					$scope.article.voted = false;

				}).error(function(){
					console.log("niewyslano po raz 1 - dislike");
				});
			} else if($scope.article.voted==true) {
				$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/votes', 
					{
						vote: { 
							value: false
						}
					},
					{
						headers: {
							Authorization: 'Token ' + localStorage.getItem('token')
						}
				}).success(function(){
					swal({ title: "You dislike this!", timer: 1500,type: "error", showConfirmButton: false});
					$scope.article.voted = false;
					
				}).error(function(){
					console.log("");
				});
			}
			else{
				console.log("nie mozna glosowac 2 razy");
			}
		}; 
	}]);