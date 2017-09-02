var app = angular.module('landmarkModule');

app.controller('DirectionsController', function($scope, $routeParams, $timeout, APIFactory, PlacesFactory){
    
    var photo;
    if (localStorage.getItem("photo")) {  // The savePlace() function clears local storage.
    	// so if you go back and select another location it clears local storage.
    	$scope.photo = localStorage.getItem("photo");
    	$scope.name = localStorage.getItem("name");
    	$scope.name
    } else {
      	place = PlacesFactory.getSelectedPlace();
      	photo = place.imageUrl;
      	$scope.photo = photo;
      	$scope.name = place.name;
		localStorage.setItem("photo", place.imageUrl);
		localStorage.setItem("name", place.name);
    }

    console.log($scope.place);

    var origin = $routeParams.origin;
    var destination = $routeParams.destination;

	$scope.goBack = function(){
	    window.history.back();
    };


    APIFactory.getLocationDirections(origin, destination)
      .then(function(result){
        console.log(result);
        $timeout($scope.locationDirections= result.data.routes[0].legs[0].steps);
        $timeout($scope.start= result.data.routes[0].legs[0].start_address);
        $timeout($scope.end= result.data.routes[0].legs[0].end_address);
  });

});
