require(['map', 'client'], function (map, client) {
	map.initialize('map');
	client.initialize(function () {
		
		console.log('Connected to the server!');

		client.onPositionUpdate(function (data) {
			map.addPosition(data);
		});
	});
});