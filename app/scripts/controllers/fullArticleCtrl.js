'use strict';

angular.module('newsApp')
	.controller('fullArticleCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId).success(function(response){
			$scope.article = response.news;			
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
				}).then(function(response){
					swal({ title: "You like this!", timer: 1500,type: "success", showConfirmButton: false});
				$scope.article.voted = true;
				}).catch(function(){

				});
			} else if($scope.article.voted==false) {
				$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/votes', 
				{
					vote: { 
						value: true
					}
				}).then(function(){
					swal({ title: "You like this!", timer: 1500,type: "success", showConfirmButton: false});
				$scope.article.voted = true;
				}).catch(function(){

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
				}).then(function(){
					swal({ title: "You dislike this!", timer: 1500,type: "error", showConfirmButton: false});
					$scope.article.voted = false;
					console.log("wyslano po raz 1 - dislike");
				}).catch(function(){
					console.log("niewyslano po raz 1 - dislike");
				});
			} else if($scope.article.voted==true) {
				$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/votes', 
				{
					vote: { 
						value: false
					}
				}).then(function(){
					swal({ title: "You dislike this!", timer: 1500,type: "error", showConfirmButton: false});
				$scope.article.voted = false;
				}).catch(function(){

				});
			}
			else{
				console.log("nie mozna glosowac 2 razy");
			}
		}; 
	}]);