
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/home',{
       templateUrl: 'home.html',
       controller: 'HomeController',
    })

    .when('/map',{
       templateUrl: 'map.html',
       controller: 'MapController',
    })
    .when('/directions',{
       templateUrl: 'directions.html',
       controller: 'DirectionsController',
    })


    .otherwise({
    redirectTo: '/home'
});

$locationProvider.hashPrefix('');

});