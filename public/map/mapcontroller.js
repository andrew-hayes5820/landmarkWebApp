var app = angular.module('landmarkModule');


app.controller('MapController', function($scope, $timeout, $location, $routeParams, $interpolate, APIFactory, LocationFactory, PlacesFactory){
    var location = $routeParams.location;
    var type = $routeParams.type;
    $scope.mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=9&size=500x500&sensor=false`;

    APIFactory.getLocationData(location, type).then(function(result){
        console.log(result);
         $timeout($scope.locationData = result);
    });

    $scope.selectPlace = function(place){
      // var location = '42.4883254,-82.94303479999999';
      // var place.geometry.location = {
      //     lat: 42.4883294,
      //     lng: -82.94303479999999
      // };
        PlacesFactory.saveSelectedPlace(place);

        $scope.origin = location;
        var lat = place.geometry.location.lat;
        var lng = place.geometry.location.lng;
        $scope.destination = `${lat},${lng}`;
        var url = $interpolate('/directions/{{origin}}/{{destination}}')($scope);
        $timeout(function(){
          $location.path(url);
        });
    }

});
