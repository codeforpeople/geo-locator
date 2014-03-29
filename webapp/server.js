var express = require('express')
	, http = require('http')
	, io = require('socket.io');

var app = express();

app.configure(function () {
	app.use(express.static(__dirname + '/js'));
});

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

var server = http.createServer(app);

server.listen(3000, function () {
	console.log('Server listening on port 3000...');
});

io.listen(server).sockets.on('connection', function (socket) {
	socket.on('locationdata', function (data) {
		socket.emit('newposition', { lat: data.lat, lng: data.lng });
	});

	app.post('/report', function (req, res) {
		console.log(req.body);
		res.end(0);
	});

	socket.on('message', function (data) {
		console.log(data);
	});
});
