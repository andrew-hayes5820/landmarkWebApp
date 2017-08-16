var app = angular.module('landmarkModule');


app.controller('HomeController', function($scope, $timeout, Factory){
    // console.log('test');
	Factory.getLocationData()
		.then(function(result){
			$timeout(console.log(result)); //This is needed because html was rendering before data was processed.
		})
		.catch(function(error){
			$scope.error = 'There was an error getting posts.';
		});

		$scope.saveFavorites = saveFavorites; // This make the function below callable in the html

		function saveFavorites (){
			console.log($scope.posts);
		}
});