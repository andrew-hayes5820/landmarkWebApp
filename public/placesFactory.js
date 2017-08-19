var app = angular.module('landmarkModule');

app.factory('PlacesFactory', function(APIFactory){
    var selectedPlace;
   
	return {
        saveSelectedPlace,
        getSelectedPlace,
    }
    function saveSelectedPlace(place){
        selectedPlace = place;
    }

    function getSelectedPlace(){
        var photoReference = selectedPlace.photos[0].photo_reference;
        return APIFactory.getPhotos(photoReference).then(function(result){
            selectedPlace.photo = result.data.body
            return selectedPlace;
        });
    }

	
	
}); 
