var app = angular.module('landmarkModule');


app.controller('HomeController', function($scope, $location, $timeout, LocationFactory){
	$scope.getGeoLocation = function(){

		if ($scope.input) {
			LocationFactory.getInputAddress($scope.input)
				.then(function(){
					$timeout($location.path('/map'));
				})
				.catch(function(err){
					console.error(err);
				});
		} else {

			LocationFactory.getGeoLocation()
				.then(function(result){
					console.log(result);
					$timeout($location.path('/map'));
				})
				.catch(function(err){
					console.error(err);
				});
		}


	}
});
