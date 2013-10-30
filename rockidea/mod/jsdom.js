var jsdom = require("jsdom");

jsdom.env({
  url: "http://blog.rock-code.com",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
	    var $ = window.$;
	    console.log($('#feed').html());
   }
})
