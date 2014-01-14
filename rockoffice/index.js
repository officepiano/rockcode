var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');


app.configure(function(){
		app.use('/assets', express.static(__dirname + '/assets'));

});

app.get('/', function(req, res) {
	fs.readFile('./index.html', 'utf8', function(err, html) {
		/*
			取php文章数据,然后将数据渲染为ejs，最后发送到浏览器
		 */
		
			res.send(html);

	})

});

app.listen(3000);