// JavaScript Document
var mst;
$(".menu-content li").hover(function(){
var curItem = $(this);
st = setTimeout(function(){//延时触发
	curItem.find("blockquote").fadeIn('');
	mst = null;
	});
}, function(){
	if(mst!=null)clearTimeout(mst);
	$(this).find("blockquote").fadeOut('');
	});