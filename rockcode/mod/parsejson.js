var $c = require('./con.js').myjson.data;
var $sel = require('./con.js').myjson.select;
var jsdom = require("jsdom");
var info =function  (text) {
	console.log('the info is : ' + text);
}

var getLength = function(ob){
	var len = 0;
	for (var i in ob) {
		len++;
	};
	return len;
}
var datajson = {

}
var _lens = {

}
var cat0_lens = getLength($c);
var _nowcat1lens = 0;
var _nowlens = {//当前状态cat1的解析json数量

}
var createJson = function(jsons,cat1,cat2){
	if(cat1 in datajson){

	}else{
		datajson[cat1] = {}
	}
	datajson[cat1][cat2] = jsons;
}

var cat0jsonDone = function(){
	console.log(datajson)
}

var cat1jsonDone = function(callback){
	_nowcat1lens++;
	console.log(_nowcat1lens)
	callback(datajson)
	if(_nowcat1lens == cat0_lens){
		cat0jsonDone();
		return
	}
	
	
}
/**
 * [parse site's html, ]
 * @param  {[object]} data [every site data]
 * @param  {[string]} type [every site type  ex:wordpress]
 * @return {[type]}      [description]
 */
var send = function(data,cat1,cat2,callback){
	info(cat1 + ' -- ' + cat2 +' start')
	var o = data;
	var op = {
	  url: o.site,
      decoding : o.charset,
	  scripts: ["http://code.jquery.com/jquery.js"],
	  done: function (errors, window) {
	  		info(cat1 + ' -- ' + cat2 +' is done')
		    var $ = window.$;
		    var jsons = getJson($,o.select);
		    createJson(jsons,cat1,cat2);
		    if(cat1 in _nowlens){
		    	_nowlens[cat1]++
		    }else{
		    	_nowlens[cat1]=0;
		    	_nowlens[cat1]++
		    }
		    if(_lens[cat1] == _nowlens[cat1]){//当前解析数量与总数相等的时候表示cat1中大cat2都加载完成
		    	cat1jsonDone(callback);
		    }
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

var parseData = function  (cat1,callback) {
	var item = $c[cat1];
	var len = getLength($c[cat1]);
	_lens[cat1] = len;
	for(var cat2 in item ){
		send(item[cat2],cat1,cat2,callback)
	}
}

exports.m = {
	parseData : parseData
}
