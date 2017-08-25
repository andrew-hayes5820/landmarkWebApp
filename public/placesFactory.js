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
        var imageUrl = APIFactory.getPhotos(photoReference);
        selectedPlace.imageUrl = imageUrl;
        return selectedPlace;
        
    }

	
	
}); 
