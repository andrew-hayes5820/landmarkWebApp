var app = angular.module('landmarkModule');


app.controller('MapController', function($scope, $timeout, $location, $routeParams, $interpolate, APIFactory, LocationFactory, PlacesFactory, MapService){
    var location = $routeParams.location;
    var type = $routeParams.type;
    var mapCoordsArray = location.split(',');
    var mapLat = parseFloat(mapCoordsArray[0]);  //  These are needed to turn the latitude and longitude from
    var mapLng = parseFloat(mapCoordsArray[1]);  //  strings to a numbers.


    APIFactory.getLocationData(location, type)
        .then(function(result){
            console.log(result);
             $timeout($scope.locationData = result);
    });

    $scope.addMarker = function(coords, name){   //  This is a callback function to set markers.
        MapService.addMarker(coords, name);
    };


    $scope.savePlace = function(place){
        PlacesFactory.saveSelectedPlace(place);

        $scope.origin = location;
        var lat = place.geometry.location.lat;
        var lng = place.geometry.location.lng;
        $scope.destination = `${lat},${lng}`;
        var url = $interpolate('/directions/{{origin}}/{{destination}}')($scope);
        $timeout(function(){
          $location.path(url);
        });
    };

    MapService.init(mapLat, mapLng);  // This creates the map and centers it on the selected location.
});
