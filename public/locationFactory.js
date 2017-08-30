// stores current location

var app = angular.module('landmarkModule');

app.factory('LocationFactory', function(APIFactory){
    var latitude;
    var longitude;
	return {
        getGeoLocation: getGeoLocation,
        getLocationCoordinates: getLocationCoordinates,
        getInputAddress: getInputAddress
    }

    function getLocationCoordinates() {
        if(latitude && longitude){
            return `${latitude},${longitude}`;
        }
    }

    function getGeoLocation(type){
        APIFactory.clearLocationData();

        return new Promise(function(resolve, reject){  // This function has to be called twice to work.  Why?
            function success(position) {
               latitude  = position.coords.latitude;
               longitude = position.coords.longitude;
                resolve({ latitude, longitude });
            }
            function error() {
                reject({error: 'Geo Location Service Currently Unavailable' });
            }
            navigator.geolocation.getCurrentPosition(success, error);

        });

    }

    function getInputAddress(location){
        APIFactory.clearLocationData();

      return  APIFactory.userLocation(location).then(function(response){
            latitude = response.lat;
            longitude = response.lng;
            console.log("getInputAddress");
            console.log(latitude, longitude);
        });
    }


});
