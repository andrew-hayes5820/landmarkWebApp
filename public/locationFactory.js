(function(angular){


var app = angular.module('landmarkModule');

app.factory('LocationFactory', function(APIFactory, geolocation){
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

    function getGeoLocation(){
        APIFactory.clearLocationData();

        return geolocation.getLocation()
            .then(function(position){
           latitude  = position.coords.latitude;
           longitude = position.coords.longitude;
                return 
        });
        // return new Promise(function(resolve, reject){  

            // var options = {
            //     enableHighAccuracy: false,  // Do not take extra time for High accuracy.
            //     timeout: 5000,  // It has 5 seconds to return coords.
            //     maximumAge: 0  // Do not return a previously cached position.
            // }

            // navigator.geolocation.getCurrentPosition(success, error, options);

            // function success(position) {
            //    latitude  = position.coords.latitude;
            //    longitude = position.coords.longitude;
            //     resolve({ latitude, longitude });
            // }

            // function error() {
            //     reject({error: 'Geo Location Service Currently Unavailable' });
            // }

        // });

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
})(window.angular);