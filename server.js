var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plan'});
    res.write('hello world');
    res.end();
})
server.listen(1337,'192.168.33.72');
console.log("server listening...");