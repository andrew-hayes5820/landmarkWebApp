var app = angular.module('landmarkModule');

app.service('MapService', function($q) {
    
    this.init = function(mapLat, mapLng) {
        var options = {
            center: new google.maps.LatLng(mapLat, mapLng),
            zoom: 8,
            disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            document.getElementById("locationMap"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }
});