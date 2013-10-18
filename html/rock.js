


var $rock = {

}

var $r = $rock;

//dom
/**
 * [gid getElementById]
 * @param  {[STRING]} id
 * @return {[OBJECT]}
 */
$r.gid = function(id){
	return document.getElementById(id);
}


/**
 * [gname getElementsByTagName]
 * @return {[ARRAY object]}
 */
$r.gname = function(){
	return document.getElementsByTagName(name);
}


//browser

$r.browser = {
	userAgent : function(){
		return navigator.userAgent;
	}
}