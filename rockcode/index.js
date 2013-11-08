var express = require('express');
var app = express();
var fs = require('fs');
var pjson = require('./mod/parsejson.js').m;


app.configure(function(){
		app.use('/assets', express.static(__dirname + '/assets'));
		app.use('/images', express.static(__dirname + '/images'));

});

app.get('/', function(req, res) {
	fs.readFile('./views/index.ejs', 'utf8', function(err, html) {
		res.send(html);
	})

});

app.listen(3000);