var app = angular.module('landmarkModule');

app.service('MapService', function($q) {
    
    this.init = function(mapLat, mapLng) {
        var options = {
            center: new google.maps.LatLng(mapLat, mapLng),  // This sets the center of the map
            zoom: 9,
            // disableDefaultUI: true    // this disables the man and other things normally found on google maps.
        }
        this.map = new google.maps.Map(
            document.getElementById("locationMap"), options  // This creates the map
        );
        this.places = new google.maps.places.PlacesService(this.map); // I think this can be commented out.
    }

    this.addMarker = function(coords) {
        // if(this.marker) this.marker.setMap(null);  // This deletes [previous markers]
        this.marker = new google.maps.Marker({
            map: this.map,
            position: coords, //  {lat: 42.3222402, lng: -83.18128769999998} = This is all that is needed for a marker to be placed
            animation: google.maps.Animation.DROP
        });
        // this.map.setCenter(coords);  // resets center of map
    }
});

