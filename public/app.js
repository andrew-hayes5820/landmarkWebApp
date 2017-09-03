(function(angular){

var app = angular.module('landmarkModule', ['ngRoute', 'ngSanitize', 'geolocation']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/home',{
       templateUrl: 'home/home.html',
       controller: 'HomeController',
    })

    .when('/map/:location/:type',{
       templateUrl: 'map/map.html',
       controller: 'MapController',
    })
    .when('/directions/:origin/:destination',{
       templateUrl: 'directions/directions.html',
       controller: 'DirectionsController',
    })


    .otherwise({
    redirectTo: '/home'
});

$locationProvider.hashPrefix('');

});
})(window.angular);
