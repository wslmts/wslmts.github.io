let express = require('express');
let WebSocket = require('ws');
let app = express();
app.use(express.static(__dirname));
const wss = new WebSocket.Server({
  port: 8006
});
wss.on('connection', function connection(ws) {
  console.log('get connection')
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    let msg=message.replace('吗','').replace('？','！').replace('?','！')
    ws.send(msg);
  });

 
});
app.listen(8005);