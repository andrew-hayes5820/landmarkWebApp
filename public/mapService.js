var app = angular.module('landmarkModule');

app.service('MapService', function($q) {
    
    this.init = function(mapLat, mapLng) {
        var options = {
            center: new google.maps.LatLng(mapLat, mapLng),  // This sets the center of the map
            zoom: 9,
            disableDefaultUI: true,    // this disables the man and other things normally found on google maps.
            
        }
        this.map = new google.maps.Map(
            document.getElementById("locationMap"), options  // This creates the map
        );
    }

    this.addMarker = function(coords, name) {
        // if(this.marker) this.marker.setMap(null);  // This deletes [previous markers]
        var image = {
            url: 'images/landmarker.png',
            size: new google.maps.Size(20, 29),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(10, 29)
        };
        var marker = new google.maps.Marker({
            map: this.map,
            position: coords, //  {lat: 42.3222402, lng: -83.18128769999998} = This is all that is needed for a marker to be placed
            animation: google.maps.Animation.DROP,
            // icon: image  // I tried to customize the marker, but mine looked much worse than the default.
        });
        // this.map.setCenter(coords);  // resets center of map
        var infowindow = new google.maps.InfoWindow({
            content: '<p>' + name + '</p>'
        })

        marker.addListener('click', function(){
            infowindow.open(this.map, marker);
        });
    }
});

