var app = angular.module('landmarkModule');


app.controller('HomeController', function($scope, $location, $interpolate, $timeout, LocationFactory){
	$scope.getGeoLocation = function(){

		if ($scope.input) {
			LocationFactory.getInputAddress($scope.input)
				.then(function(){
			$scope.location = LocationFactory.getLocationCoordinates();
				})
				.then(function(){
					var url = $interpolate('/map/{{location}}')($scope);
					$location.path(url);
				})
				.catch(function(err){
					console.error(err);
				});
		} else {

			LocationFactory.getGeoLocation()
			.then(function(){
				$scope.location = LocationFactory.getLocationCoordinates();
			})
			.then(function(){
				var url = $interpolate('/map/{{location}}')($scope);
				$location.path(url);
			})
			.catch(function(err){
				console.error(err);
				});
		}


	}
});
