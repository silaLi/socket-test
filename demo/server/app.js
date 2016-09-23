var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
console.log(path.resolve(__dirname, '../front-src'))
app.use('/', express.static(path.resolve(__dirname, '../front-src')));

io.sockets.on('connection', function(socket) {

    console.log(socket.id);
    /**
     * 系统层级的连接
     * @type {Array}
     */
    // var handlers = [{
    //     key: 'disconnect',
    //     next: function() {
    //         console.log('clearInterval', socket.id);
    //         clearInterval(Interval);
    //     }
    // }, {
    //     key: 'standard-date',
    //     next: function(time){
    //         //  服务器的当前时间
    //         var now = new Date().getTime();
    //         socket.emit('standard-date', now);
    //     }
    // }, {
    //     key: 'keep-beat',
    //     next: function(){
    //         socket.emit('keep-beat');
    //     }
    // }];

    // handlers = [];

    /**
     * 各个页面层级的连接
     * @type {[Array]}
     */
    // var roomService = require('./service/roomService.js')(allRoom, allPlayer, allPlayerByReconnection, playedGame, socket, io, Player, Room);

    /**
     * 把各个连接集合组装在一起。
     * @type {[type]}
     */
    
    // handlers = handlers.concat(roomService);

    /**
     * 统一在socket上注册接口
     * @return {[type]}          [description]
     */
    // handlers.forEach(function(handler) {
    //     socket.on(handler.key, function(data) {
    //         try {
    //             var willSend = handler.next(data);
    //             willSend && willSend.persons && willSend.persons.forEach(function(person) {
    //                 person.emit(handler.key, willSend.data)
    //             })
    //         } catch (e) {
    //             socket.emit('app-error');
    //             console.log(e);
    //         }
    //     });

    //     socket.on(handler.key + '__Refresh', function(data) {
    //         var willSend = handler.next(data);

    //         socket.emit(handler.key, willSend && willSend.data);
    //     });
    // });


    // require(path.resolve(__dirname, './demo/1/test.js'))(socket);
    require(path.resolve(__dirname, './demo/2/test.js'))(socket);
});

function emit1(socket){
	console.log('aaa1,'+socket.id);
	socket.emit('aaa', 'u are disconnecting1');
	emit1 = function(){};
}
function emit2(socket){
	console.log('aaa2,'+socket.id);
	socket.emit('aaa', 'u are disconnecting2');
	emit2 = function(){};
}
server.listen(3003, function() {
    console.log(3003, 'open');
});