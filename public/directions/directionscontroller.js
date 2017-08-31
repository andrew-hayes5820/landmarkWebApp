var app = angular.module('landmarkModule');

app.controller('DirectionsController', function($scope, $routeParams, $timeout, APIFactory, PlacesFactory){
    
    var photo;
    if (photo) {
    	$scope.photo = photo; 
    } else {
	      if (PlacesFactory.getSelectedPlace()) {
		      	place = PlacesFactory.getSelectedPlace();
		      	photo = place.imageUrl;
		      	$scope.photo = photo;
				localStorage.setItem("photo", place.imageUrl);
		    } else {
		    	photo = localStorage.getItem("photo");
		    } 
    	//go back to map view?  Unlikely scenario
    }

	// place = PlacesFactory.getSelectedPlace();
    // } else {

    // }
    // }
	// test = localStorage.getItem("photo");
	// console.log(test);

//     if (localStorage.getItem("place")){
//     	place = JSON.parse(localStorage.getItem("place"));
// 	} else {
//     place = PlacesFactory.getSelectedPlace();
// 	localStorage.setItem("place", place);
// }
	// $scope.place = place;
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
