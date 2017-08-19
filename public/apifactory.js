// handles http requests

var app = angular.module('landmarkModule');

app.factory('APIFactory', function($http){

	var locationData;
	var apiPlacesKey = "AIzaSyAGMwnSBnRSYWnI2DEVf43Zq9nb1Zgf-So";
	// old key = 'AIzaSyDLI6aa4HIc-UGROfE6ITmgnsSO-ot9Wcw'
	var apiMapsKey = "AIzaSyAxK_qHE-PqWJ9mhvcKd61y__47f7opeWc"

	return {
		getLocationData: getLocationData,
		userLocation: userLocation,
		clearLocationData: clearLocationData
	}

	function getLocationData(location){
		location = location || '-33.8670,151.1957';
		var baseUrl = `api-places?location=${location}&radius=50000&types=zoo`;
		var url = `${baseUrl}&key=${apiPlacesKey}`;
		if (locationData){
			//if we already have data return this.
			return Promise.resolve(locationData); // Promise.resolve is a keyword that turns any data into a
			// promise value.
		}
	//if we don't have data, use http service to get data from reddit.
		return $http.get(url)
			.then(function(result){
				var promises = [];

				result.data.results.forEach(function(item){
					promises.push(getDetails(item.place_id));
				});

				return Promise.all(promises);
			}).then(function(data){
				locationData = data.map(function(item){
					return item.data.result;
				});
				return locationData;
			});

		function getDetails(placeId){
			return $http.get(`api-details?key=${apiPlacesKey}&placeid=${placeId}`);
		}
	}

function userLocation(location){
		var addressInput = location || "4820+Williamson+Dearborn+MI";

		var url =  `api-map?address=${addressInput}&key=${apiMapsKey}`;


		return $http.get(url)
			.then(function(result){
				console.log(result.data.results[0].geometry.location);

				return result.data.results[0].geometry.location; //path to be determined
			}).catch(function(e) {
				console.log("ERROR", e);
			});

	}
function clearLocationData(){
	locationData = null;
}

});
