
var app = angular.module('landmarkModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider, $sceDelegateProvider) {
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

$sceDelegateProvider.resourceUrlWhitelist([
  'self',
  'https://maps.googleapis.com/maps/api/place/nearbysearch/jsonp?location=-33.8670,151.1957&radius=500&types=landmarks&name=cruise&key=AIzaSyDLI6aa4HIc-UGROfE6ITmgnsSO-ot9Wcw'
]);

});
