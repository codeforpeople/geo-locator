define(function () {

	var client = function () {

		var socket = io.connect('http://localhost:3000');

		var initialize = function (callback) {
			socket.on('connect', callback);
		};

		var sendStatus = function (status) {
			socket.emit('clientstatus', { status: status });
		};

		var onPositionUpdate = function (callback) {
			socket.on('newposition', function (data) {
				callback(data);
			});
		};

		return {
			initialize: initialize,
			sendStatus: sendStatus,
			onPositionUpdate: onPositionUpdate
		};
	};

	return client();
});