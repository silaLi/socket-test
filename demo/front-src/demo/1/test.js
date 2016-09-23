(function () {
	var socketid_el = CreateDiv('socketid');
	var fail_el = CreateDiv('fail');
	var time_el = CreateDiv('time');

	var sio = io.connect();

	sio.on('connect', connect);
	function connect() {
		var beat = -1;
		var fail = 0;
		var old = new Date().getTime();
		sio.on('test-beat', function (data) {
			var _beat = data.beat;
			var socketid = data.socketid;
			beat++;
			if (_beat !== beat) {
				if (_beat === 0) {
					beat = 0;
				}else{
					fail_el.textContent = socketid + ' fail ' +(++fail);
				}
			}

			socketid_el.textContent = socketid + ' ' + beat + ' ' + _beat;
			var temp = old
			old = new Date().getTime();
			if (old - temp > 200) {
				var div = CreateDiv('')
				div.textContent = old - temp;
			}else{
				time_el.textContent = old - temp;
			}
		});
	}

	function CreateDiv(id){
		var _div = document.createElement('div');
		_div.id = id;
		document.body.appendChild(_div);
		return _div;
	}
}());