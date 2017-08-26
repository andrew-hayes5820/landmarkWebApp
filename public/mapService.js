var app = angular.module('landmarkModule');

app.service('MapService', function($q) {
    
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(40.7127837, -74.00594130000002),
            zoom: 13,
            disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            document.getElementById("locationMap"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }
});