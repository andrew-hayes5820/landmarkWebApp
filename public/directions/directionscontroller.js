var app = angular.module('landmarkModule');

app.controller('DirectionsController', function($scope, $routeParams, $timeout, APIFactory, PlacesFactory){
    $scope.place = PlacesFactory.getSelectedPlace();
    console.log($scope.place);


    var origin = $routeParams.origin;
    var destination = $routeParams.destination;


    APIFactory.getLocationDirections(origin, destination)
      .then(function(result){
        console.log(result);
        $timeout($scope.locationDirections= result.data.routes[0].legs[0].steps);
        $timeout($scope.start= result.data.routes[0].legs[0].start_address);
        $timeout($scope.end= result.data.routes[0].legs[0].end_address);
  });

});
