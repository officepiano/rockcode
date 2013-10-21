
var mod = {
		express : require ( 'express' ),
		fs : require('fs'),
		ejs : require('ejs'),
		url : require("url")
}

mod.app = mod.express();
mod.app.set("view engine","ejs"); 
exports.mod = mod;