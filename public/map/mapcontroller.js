var app = angular.module('landmarkModule');


app.controller('MapController', function($scope, $timeout, $location, $routeParams, APIFactory, LocationFactory, MapService, PlacesFactory){
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

    $scope.selectPlace = function(place){
        PlacesFactory.saveSelectedPlace(place);
        $timeout($location.path('/directions'));
    }
MapService.init(mapLat, mapLng);  // This creates the map and centers it on the selected location.
});
