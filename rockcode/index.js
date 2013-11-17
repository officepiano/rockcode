var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');
var pjson = require('./mod/parsejson.js').m;


app.configure(function(){
		app.use('/assets', express.static(__dirname + '/assets'));
		app.use('/images', express.static(__dirname + '/images'));

});

app.get('/', function(req, res) {
	fs.readFile('./views/index.ejs', 'utf8', function(err, html) {
		/*
			取php文章数据,然后将数据渲染为ejs，最后发送到浏览器
		 */
		pjson.parseData('php',function(json){
			console.log(json.php.php100)
			var htmls = ejs.render(html,{
							"title":"testddd",
							'php100arr' : json.php.php100
						})
			res.send(htmls);
		});
		
	})

});

app.listen(3000);