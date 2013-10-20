var  express  =  require ( 'express' ), 
	 app =express(),
	 fs = require('fs');

app.configure(function(){
	app.use('/jic', express.static(__dirname + '/static'));
});

app.get( '/a' ,  function (req,res){ 
	var htmls = '';
	fs.readFile('./view/head.html','utf8',function(err,html){
		htmls += html;
		htmls += '123123';
		fs.readFile('./view/foot.jade','utf8',function(err,html){
			htmls += html;

		    res.send ( htmls); 
		})
	})
})
app.listen(3000); 
console.log ( 'start express server\n' );
