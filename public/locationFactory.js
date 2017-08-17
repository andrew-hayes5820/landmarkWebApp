var app = angular.module('landmarkModule');

app.factory('LocationFactory', function(){
    var latitude;
    var longitude;
	return {
        getGeoLocation: getGeoLocation,
        getLocationCoordinates: getLocationCoordinates,
    }
    
    function getLocationCoordinates () {
        if(latitude && longitude){
            return `${latitude},${longitude}`;
        }
    }
    
    function getGeoLocation(){
        
        return new Promise(function(resolve, reject){
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

    };
	
	
}); 
