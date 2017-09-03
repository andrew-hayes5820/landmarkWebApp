(function(angular){

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
			return
		}
	}

	$scope.getMyGeoLocation = function(){
		getCurrentCoords();
	}

function getCurrentCoords() {

	if ('geolocation' in navigator){
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
	} else {
		errorMsg = "Sorry, it looks like your browser does not support geolocation so we are unable to get your current location.";
		outputResult(errorMsg);  // Output error message.
	}

}

});
})(window.angular);