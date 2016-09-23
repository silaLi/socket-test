// test demo 1
module.exports = function(socket) {
	var beat = 0;
	var socketid = socket.id;
	function testBeat(){
	    socket.emit('test-beat', {beat: beat++, socketid: socketid});
	}
	socket.on('disconnect', function(){
		console.log('clearInterval', socket.id);
        clearInterval(Interval);
	});
	var Interval = setInterval(testBeat, 100);
}