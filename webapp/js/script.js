require(['map', 'client'], function (map, client) {
	map.initialize('map');
	client.initialize(function () {
		
		console.log('Connected to the server!');

		client.sendStatus('Connected!');
		client.onPositionUpdate(function (data) {
			console.log(data);
		});
	});
});