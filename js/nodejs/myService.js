

// 请求nodejs模块，并赋给http变量
var http = require("http");

function start(port){
	http.createServer(
		function(request,response){
			response.writeHead(200,{"Content-Type":"text/plain"});
			response.write("helloworld");
			console.log("[service] 收到一个请求");
			response.end();
		}
	).listen(port);
	console.log("[service] 开启服务器在 http://localhost:"+port)
}

exports.start = start
// ________________________________
