var ws = require("nodejs-websocket");

var server = ws.createServer(function(conn){

	console.log("New connection");
	conn.on("text", function(str){
		console.log("Received ", str);
		conn.sendText(str.toUpperCase()+"!!!");
	});
	conn.on("error", function(err){
		console.log(err);
	});
	conn.on("close", function(code, reason){
		console.log("Connection closed "+code+" : "+reason);
	});

}).listen(8001);