var app = angular.module('landmarkModule');


app.controller('HomeController', function($scope, Factory){
    console.log('test');
    Factory.getLocationData();

});