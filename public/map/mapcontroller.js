var app = angular.module('landmarkModule');


app.controller('MapController', function($scope, $timeout, APIFactory, LocationFactory){
    var location = LocationFactory.getLocationCoordinates();
    $scope.mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=13&size=300x300&sensor=false`;
    APIFactory.getLocationData(location).then(function(result){
        console.log(result);
         $timeout($scope.locationData = result);
    });
});
