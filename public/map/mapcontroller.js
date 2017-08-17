var app = angular.module('landmarkModule');


app.controller('MapController', function($scope, $timeout, Factory){

    Factory.getLocationData()
    .then(function(result){
      $timeout($scope.locationData = result);
    })
    .catch(function(error){
      $scope.error = 'There was an error getting landmarks';
    });

});
