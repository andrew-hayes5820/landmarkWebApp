var app = angular.module('landmarkModule');


app.controller('HomeController', function($scope, $location, $timeout, LocationFactory){
	$scope.getGeoLocation = function(){
		LocationFactory.getGeoLocation()
			.then(function(result){
				console.log(result);
				$timeout($location.path('/map'));
			})
			.catch(function(err){
				console.error(err);
			});
		}
});