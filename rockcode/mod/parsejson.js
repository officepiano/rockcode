var $c = require('./con.js').myjson.data;
var $sel = require('./con.js').myjson.select;
var jsdom = require("jsdom");


var jsonTohtml = function(jsons){
	console.log(jsons)
}
/**
 * [parse site's html, ]
 * @param  {[object]} data [every site data]
 * @param  {[string]} type [every site type  ex:wordpress]
 * @return {[type]}      [description]
 */
var parse = function(data){
	var o = data;
	var op = {
	  url: o.site,
      decoding : o.charset,
	  scripts: ["http://code.jquery.com/jquery.js"],
	  done: function (errors, window) {
		    var $ = window.$;
		    var jsons = getJson($,o.select);
		    jsonTohtml(jsons);
	   }
	}
	if(o.charset){
		op['encoding'] = null;
	}
	jsdom.env(op)
}
/**
 * [getJson description]
 * @param  {[object]} $      [description]
 * @param  {[number]} select [select type]
 * @return {[type]}        [description]
 */
var getJson = function($,select){
	var s = $sel[select];
	var jsons = [];
	var k = 0;
	$(s.parent+' ' + s.title).each(function(){
		if(k>=5){ //只取前五条
			return jsons;
		}
		jsons.push({
			title : $(this).html(),
			des : $(this).parents(s.desPrant).find(s.des).html()
		}) 
		k++;
	})
	return jsons;
}

var parseData = function  (key) {
	
	var item = $c[key];
	for(var name in item ){
		parse(item[name])
	}

}

parseData('news')

