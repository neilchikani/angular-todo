var express = require('express'),
	app = express(),
	path = require('path');

app.use(express.static('public') );
app.listen(3000, function(){
	console.log("Hello server is listening on 3000");
});