// BASIC ROUTING USING EXPRESS

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//Get Request
app.get('/', function(req, res){
	res.send("Hello Visiter!");
	var msg = {
		"aasdasdasdasda"
	}

	res.send(msg);


})

app.get('/user/:username', function(req, res){
	res.send(" " + req.params.username + " profile")
})


var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('Express ' + app.get('port'));
});