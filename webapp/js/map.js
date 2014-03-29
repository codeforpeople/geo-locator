define(function () {

	var map = function () {

		require.config({
			paths: {
				google: 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false'
			}
		});

		var map_handler;
		var map_options = {
			center: new google.maps.LatLng(0, 0),
			mapTypeId: google.maps.MapTypeId.HYBRID,
			zoom: 0
		};

		var initialize = function (id) {
			map_handler = new google.maps.Map(document.getElementById(id),
				map_options);
		}

		return {
			initialize: initialize
		};
	};

	return map();
});