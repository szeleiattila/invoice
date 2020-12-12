//import required module
var http = require("http");
//creat server
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello world!!');
}).listen(8088);
//Debug http://127.0.0.1:8088/