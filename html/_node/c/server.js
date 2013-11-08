var http = require("http");
var url = require("url");
var r_url = require('../rock/url').r_url;
function start(router){
	function onRequest(request, response) {
		var pathname = r_url.getPathname(request.url);
		if( new RegExp('favicon.ico').test(pathname) ){
			return;
		}
		router.route(pathname);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}
exports.start = start;
