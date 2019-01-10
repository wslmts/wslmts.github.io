var udpSocket = new udp();
udpSocket.localPort = 8943;
udpSocket.receive = receiveMsg;
/*多播用于一个有限的局部网络中的UDP一对多通信。之所以说是一个有限的局部网络是因为这个范围是无法确定的，
一个是因为一个数据能传多远由TTL决定，多播中TTL一般被设为15，最多不会超过30，也有设为0的（数据不会流出本地）,
再一个就是有的路由是不会转发多播数据的，即使TTL在此节点并没有减为0。

多播使用一段保留的ip地址，224.0.0.0到239.255.255.255。其中224.0.0.0到224.0.0.255为局部连接多播地址，
224.0.1.0到238.255.255.255为预留多播地址，239.0.0.0到239.255.255.255为管理权限多播地址。
局部连接多播地址和管理权限多播地址均为保留多播地址，可被自由使用的只有预留多播地址，即224.0.1.0到238.255.255.255。
多播地址是特殊的ip地址，它不对应任何物理设备。但UDP进行多播时，只将其看做普通的ip地址就可以。
*/
udpSocket.init(function(){
    udpSocket.joinGroup('224.0.1.100', function(){
        chrome.runtime.onMessage.addListener(function(message, sender, callback){
            if(message.action == 'send'){
                var buf = str2ab(message.msg);
                udpSocket.send('224.0.1.100', udpSocket.localPort, buf, function(){
                    //message is sent
                });
            }
        });
        chrome.app.runtime.onLaunched.addListener(function(){
            chrome.app.window.create('main.html', {
                'id': 'main',
                'bounds': {
                    'width': 400,
                    'height': 600
                }
            });
        });
    });
});

function receiveMsg(info){
    var msg = ab2str(info.data);
    chrome.runtime.sendMessage({action:'receive', msg:msg});
}

function str2ab(str){
    var buf = new ArrayBuffer(str.length*2);
    bufView = new Uint16Array(buf);
    for(var i=0; i<str.length; i++){
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function ab2str(buf){
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}