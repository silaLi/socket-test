##socket.io测试报告

######1、socekt.io能坚持多久
将服务器上的socekt.io代码从早上9:30分开始运行到晚上18点，每100毫秒发送一条数据，数据大概15个字符，同时开启5个连接
结果是没有任何一个接连中断过
事例demo1

#####2、socket.io默认事件触发情况
服务器端socket存在connect和disconnect事件，客户机端存在reconnecting、connect、connecting、reconnect、disconnect几个事件
测试情况
1、正常链接，服务器端触发connect，客户端触发connect
2、断开链接，服务器端和客户端同时触发disconnect，客户端继续触发reconnecting->reconnect->connect
3、网络断开，服务端不会触发任何事件，客户端触发disconnect->reconnecting->reconnect->reconnect->reconnect(次数不定，至少1次)->connect

[测试代码](http://www.baidu.com "github")