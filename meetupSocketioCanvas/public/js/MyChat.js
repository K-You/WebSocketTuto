window.onload = function(){
	var messages = [],
		socket = io.connect(window.location.origin),
		display = document.getElementsByTagName("output")[0],
		button = document.getElementsByTagName("button")[0],
		content = document.getElementById("msg");

	socket.on('message', function(data){
		if(data.message){
			console.log(data);
			messages.push(data.message);
			var html = '';
			for(var i=0;i<messages.length;i++){
				html+=messages[i]+"<br />";
			}
			display.innerHTML = html;
		}else{
			console.log("There is a problem", data);
		}
	});

	button.onclick = function(){
		socket.emit('receive', {message : content.value});
	}
}