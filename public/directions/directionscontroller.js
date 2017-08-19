var app = angular.module('landmarkModule');

app.controller('DirectionsController', function($scope, APIFactory, PlacesFactory){
    console.log('test');
    PlacesFactory.getSelectedPlace().then(function(result){
      console.log(result);
    }).catch(function(err){
      console.error(err);
    });

  });
