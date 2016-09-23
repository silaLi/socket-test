// test demo 2
module.exports = function(socket) {
	var beat = 0;
	var socketid = socket.id;
	
	socket.on('disconnect', function(){
		console.log('clearInterval', socketid);
	});
	socket.on('disconnect', function(){
		console.log('disconnect');
	});
}