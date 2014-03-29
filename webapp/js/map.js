define(function () {

	var map = function () {

		require.config({
			paths: {
				google: 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false'
			}
		});

		var zoom = 0;

		var map_handler;
		var map_options = {
			center: new google.maps.LatLng(0, 0),
			mapTypeId: google.maps.MapTypeId.HYBRID,
			zoom: zoom
		};

		var initialize = function (id) {
			map_handler = new google.maps.Map(document.getElementById(id),
				map_options);
		}

		var addPosition = function (data) {
			var accuracyOptions = {
				strokeColor: '#ccc',
				strokeOpacity: 0.5,
				fillColor: '#eee',
				fillOpacity: 0.3,
				map: map_handler,
				center: new google.maps.LatLng(data.lat, data.lng),
				radius: data.accuracy
			};

			var positionOptions = {
				fillColor: '#000',
				fillOpacity: 1,
				map: map_handler,
				center: new google.maps.LatLng(data.lat, data.lng),
				radius: 1
			};

			accuracyZone = new google.maps.Circle(accuracyOptions);
			positionMarker = new google.maps.Circle(positionOptions);

			map_handler.setCenter(new google.maps.LatLng(data.lat, data.lng));
			if (zoom === 0) {
				map_handler.setZoom(18);
				zoom = 18;
			}

			return {
				accuracyZone: accuracyZone,
				positionMarker: positionMarker
			};
		}

		return {
			initialize: initialize,
			addPosition: addPosition
		};
	};

	return map();
});