var express = require('express');
var app = express();
var walk = require('walk');
var fs = require('fs');


var walker = walk.walk(__dirname + '/',{
	filters: ["_demos"]
})


walker.on("directories", function (root, dirs, next) {
	for(var i = 0 ;i < dirs.length; i++){
		console.log(dirs[i].name)
	}
})
walker.on("end",function(){

	console.log(123)
})
app.configure(function(){
		app.use('/demos', express.static(__dirname + '/demos'));
});
app.get('/', function(req, res){
  res.send('hello world');
});
console.log('start')
app.listen(3000);
