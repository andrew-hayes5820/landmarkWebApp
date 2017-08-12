var app = angular.module('landmarkModule');

app.factory('Factory', function(){
	var locationData;

	return {
		getLocationData: getLocationData
	}

		function getLocationData(){
		if (locationData){
			//if we already have data return this.
			return Promise.resolve(locationData); // Promise.resolve is a keyword that turns any data into a
			// promise value.
		}
	//if we don't have data, use http service to get data from reddit.
		return $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=landmarks&name=cruise&key=AIzaSyDLI6aa4HIc-UGROfE6ITmgnsSO-ot9Wcw')
		.then(function(result){
			console.log(result);
			locationData = // need to look at data to see what this points to.
			return locationData;
		});
	
	}
}); 
