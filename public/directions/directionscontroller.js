var app = angular.module('landmarkModule');

app.controller('DirectionsController', function($scope, APIFactory, PlacesFactory){
    console.log('test');
    $scope.place = PlacesFactory.getSelectedPlace();
    console.log($scope.place);

  });
