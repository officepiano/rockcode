var nodeurl = require("url");
var r_url = {
	print : function(url){
	},
	getPathname : function(url){
		return nodeurl.parse(url).pathname;
	}
}


exports.r_url = r_url;

