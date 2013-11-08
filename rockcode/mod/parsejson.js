var $c = require('./con.js').myjson.data;
var $sel = require('./con.js').myjson.select;
var jsdom = require("jsdom");


var jsonTohtml = function(jsons){
	console.log(jsons.length)
}
/**
 * [parse site's html, ]
 * @param  {[object]} data [every site data]
 * @param  {[string]} type [every site type  ex:wordpress]
 * @return {[type]}      [description]
 */
var parse = function(data,type){
	var o = data;
	jsdom.env({
	  url: o.site,
	  scripts: ["http://code.jquery.com/jquery.js"],
	  done: function (errors, window) {
		    var $ = window.$;
		    var jsons = getJson($,o.select);
		    jsonTohtml(jsons);
	   }
	})
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
			des : $(this).parents('.post').find(s.des).html()
		}) 
		k++;
	})
	return jsons;
}
for(var type in $c ){
	var item = $c[type];
	for(var name in item ){
		parse(item[name],type)
	}
}