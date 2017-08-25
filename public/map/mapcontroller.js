var app = angular.module('landmarkModule');


app.controller('MapController', function($scope, $timeout, $location, $routeParams, APIFactory, LocationFactory, PlacesFactory){
    var location = $routeParams.location;
    var type = $routeParams.type;
    $scope.mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=9&size=500x500&sensor=false`;

    APIFactory.getLocationData(location, type).then(function(result){
        console.log(result);
         $timeout($scope.locationData = result);
    });

    $scope.savePlace = function(place){
        PlacesFactory.saveSelectedPlace(place);
        $timeout(function(){$location.path('/directions')});
    }

});
