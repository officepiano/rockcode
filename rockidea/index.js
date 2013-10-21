var m = require(__dirname + '/mod/config/mod.js').mod,
	m2 = require(__dirname + '/mod/config/mod2.js').mod2;
	
	m.app.configure(function(){
		m.app.use('/jic', m.express.static(__dirname + '/static'));
	});
	m2.setview(m.app);
	m.app.listen(3000); 
	console.log ( 'start express server\n' );
