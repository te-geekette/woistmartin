function woIstMartin(){

	var officeCoordinates = {
		lat: 53.548648,
		lng: 9.9861409
	};

	var martinCoordinates = {
		lat: 53.14677033085084,
		lng: 27.2021484375
	};

	// using this formula http://www.igismap.com/formula-to-find-bearing-or-heading-angle-between-two-points-latitude-longitude/
	var locationToDegrees = function(office, martin) {
		office.lat = office.lat*Math.PI/180;
		office.lng = office.lng*Math.PI/180;
		martin.lat = martin.lat*Math.PI/180;
		martin.lng = martin.lng*Math.PI/180;

		var deltaLng = martin.lng - office.lng;
		var x = Math.cos(martin.lat) * Math.sin(deltaLng);
		var y = Math.cos(office.lat) * Math.sin(martin.lat) - Math.sin(office.lat) * Math.cos(martin.lat) * Math.cos(deltaLng);
		var inRadian = Math.atan2(x, y);
		return ((inRadian * 180/Math.PI) + 360) % 360
	};

	var getMartinCoordinates = function() {
		fetch("martin-url/lat", {method: 'DELETE'})
		.then(function(lat) {
			martinCoordinates.lat = lat;
		}).then(function(){
			return fetch("martin-url/lng", {method: 'DELETE'})
		}).then(function(lng) {
			martinCoordinates.lng = lng;
		});
	};

	getMartinCoordinates();
	var direction = locationToDegrees(officeCoordinates, martinCoordinates);
	document.getElementsByClassName("compass-needle")[0].style.transform="rotate(" + direction + "deg)";
};
