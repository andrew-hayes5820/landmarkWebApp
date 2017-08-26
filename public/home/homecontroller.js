var app = angular.module('landmarkModule');


app.controller('HomeController', function($scope, $location, $interpolate, $timeout, LocationFactory){
	$scope.type = "museum";
	$scope.getGeoLocation = function(){

		if ($scope.input) {
			LocationFactory.getInputAddress($scope.input)
				.then(function(){
			$scope.location = LocationFactory.getLocationCoordinates();
				})
				.then(function(){
					var url = $interpolate('/map/{{location}}/{{type}}')($scope);
					$location.path(url);
				})
				.catch(function(err){
					console.error(err);
				});
		} else {
			getCurrentCoords();
		}
	}

	$scope.getMyGeoLocation = function(){

		if (!$scope.type) {
			alert("Select a place you'd like to visit.");
		}
		getCurrentCoords();
	}

function getCurrentCoords() {
			LocationFactory.getGeoLocation()
			.then(function(){
				$scope.location = LocationFactory.getLocationCoordinates();
			})
			.then(function(){
				var url = $interpolate('/map/{{location}}/{{type}}')($scope);
				console.log(url);
				$timeout(function(){$location.path(url);});
			})
			.catch(function(err){
				console.error(err);
				});
}

});
