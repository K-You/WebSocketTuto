var express = require("express"),
	app = express(),
	port = 3700,
	io = require('socket.io').listen(app.listen(port));

app.set('views', __dirname+"/views")
	//set plain html as our template engine, which requires EJS
	.engine('html', require('ejs').renderFile)
	
	//all our client side assets will be stored in a public directory
	.use(express.static(__dirname+'/public'))
	//OUR ROUTES
	.get('/', function(req, res){
		res.render('index.html');
	});

//Connection handler, fires whenever someone connects

io.sockets.on('connection', function(socket){
	console.log("Connection...");
	
	socket.emit('message', {message : 'welcome to the chat'});

	socket.on('receive', function(data){
		console.log(data);
		io.sockets.emit('message', data);
	});


	socket.on('disconnect', function () {

      socket.emit('disconnected');
      console.log("disconnected...");

  });
});