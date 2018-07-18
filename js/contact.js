
	// Initialize and add the map
	function initMap() {
	  // The location of 
	  var pharmacy = {lat: 40.705371, lng: -73.690163};
	  // The map, centered at 
	  var map = new google.maps.Map(
	  	document.getElementById('map'), {zoom: 17, center: pharmacy});
	  // The marker, positioned at 
	  var marker = new google.maps.Marker({position: pharmacy, map: map});


	  //automatic zoom
	  // bounds = new google.maps.LatLngBounds();
	  // var loc = new google.maps.LatLng(marker.position.lat(40.7054081), marker.position.lng(-73.6909824));
	  // bounds.extend(loc);
	  // map.fitBounds(bounds); //auto-zoom
	  // map.setZoom(17);
	  // map.panTo(bounds);
	}