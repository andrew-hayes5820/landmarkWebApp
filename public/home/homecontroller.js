var app = angular.module('landmarkModule');


app.controller('HomeController', function($scope, $location, $interpolate, $timeout, LocationFactory){
	$scope.getGeoLocation = function(){

		if($scope.aquarium){
			$scope.type = "aquarium";
		} else if($scope.museum){
			$scope.type = "museum";
		}else if($scope.art_gallery){
			$scope.type = "art_gallery";
		}else if($scope.library){
			$scope.type = "library";
		} else if($scope.zoo){
			$scope.type = "zoo";
		}else{
			alert("Select a place you'd like to visit.");
		}

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

			LocationFactory.getGeoLocation()
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
		}
	}

	$scope.getMyGeoLocation = function(){

		if($scope.aquarium){
			$scope.type = "aquarium";
		} else if($scope.museum){
			$scope.type = "museum";
		}else if($scope.art_gallery){
			$scope.type = "art_gallery";
		}else if($scope.library){
			$scope.type = "library";
		} else if($scope.zoo){
			$scope.type = "zoo";
		}else{
			alert("Select a place you'd like to visit.");
		}

		LocationFactory.getGeoLocation()
			.then(function(){
				$scope.location = LocationFactory.getLocationCoordinates();
			})
			.then(function(){
				var url = $interpolate('/map/{{location}}/{{type}}')($scope);
				console.log(url);
				$location.path(url);
			})
			.catch(function(err){
				console.error(err);
				});
	}

});
