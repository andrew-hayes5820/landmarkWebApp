
var app = angular.module('landmarkModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/home',{
       templateUrl: 'home/home.html',
       controller: 'HomeController',
    })

    .when('/map',{
       templateUrl: 'map/map.html',
       controller: 'MapController',
    })
    .when('/directions',{
       templateUrl: 'directions/directions.html',
       controller: 'DirectionsController',
    })


    .otherwise({
    redirectTo: '/home'
});

$locationProvider.hashPrefix('');

});
