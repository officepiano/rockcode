var nodeurl = require("url");
exports.rock = {
	getPathname : function(url){
		return nodeurl.parse(url).pathname;
	}
};

