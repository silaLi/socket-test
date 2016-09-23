(function () {
	var socketid_el = CreateDiv('socketid');
	var sio = io.connect();
	sio.on('connect', function(){
		socketid_el.textContent = sio.id;
		showMsg('connect');
	});
	sio.on('connecting', function(){
		showMsg('connecting');
	});
	sio.on('reconnect', function(){
		showMsg('reconnect');
	});
	sio.on('disconnect', function(){
		showMsg('disconnect');
	});
	sio.on('reconnecting', function(){
		showMsg('reconnecting');
	});
	var pervEvent = null;
	function showMsg(msg){
		if (pervEvent == msg) {
			return;
		}
		pervEvent = msg;
		var div = document.createElement('div');
		div.textContent = msg;
		document.body.appendChild(div);
	}
	function CreateDiv(id){
		var _div = document.createElement('div');
		_div.id = id;
		document.body.appendChild(_div);
		return _div;
	}
}());