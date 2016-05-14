'use strict';

angular.module('newsApp')
	.controller('fullArticleCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

		$http.get('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId).then(function(response){
			$scope.article = response.data.news
		});

		$scope.backTo = function() {
			window.history.back();
		};

		$scope.like = function(){
			if(!$scope.article.user_voted){
				$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/votes', 
					{
						vote : { value: true}
					},

					{
						headers: {
							Authorization: 'Token ' + localStorage.getItem('token')
						}
					}).success(function(){
						swal({ title: "You like this!", timer: 2000,type: "success", showConfirmButton: false});
					}).error(function(){
						swal({ title: "No permission!", timer: 2000,type: "error", showConfirmButton: false});
					});
			}
			else{
				$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/vote', 
					{
						vote : { value: true}
					},

					{
						headers: {
							Authorization: 'Token ' + localStorage.getItem('token')
						}
					}).success(function(){
						swal({ title: "You like this!", timer: 2000,type: "success", showConfirmButton: false});
					}).error(function(){
						swal({ title: "No permission!", timer: 2000,type: "error", showConfirmButton: false});
					});
			}
		};

		$scope.dislike = function(){
			if($scope.article.user_voted){
				$http.put('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/votes', 
				{
				vote : { value: false}
				},

				{
					headers: {
						Authorization: 'Token ' + localStorage.getItem('token')
				}
				}).success(function(){
					swal({ title: "You dislike this!", timer: 2000,type: "error", showConfirmButton: false});
				})
				.error(function(){
					swal({ title: "No permission!", timer: 2000,type: "error", showConfirmButton: false});
				});
			}
			else{
				$http.post('http://news-world.iiar.pwr.edu.pl/api/v1/news/' + $stateParams.articleId + '/vote', 
				{
				vote : { value: false}
				},

				{
					headers: {
						Authorization: 'Token ' + localStorage.getItem('token')
				}
				}).success(function(){
					swal({ title: "You dislike this!", timer: 2000,type: "error", showConfirmButton: false});
				}).error(function(){
					swal({ title: "No permission!", timer: 2000,type: "error", showConfirmButton: false});
				});
			}
		}; 

	}]);
