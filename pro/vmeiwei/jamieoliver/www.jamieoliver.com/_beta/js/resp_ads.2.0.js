var init_width = window.innerWidth;
var break_point = 720; //width in which mobile ads are served
var desktop_ads = 'y';
if(init_width < break_point) {
	var desktop_ads = 'n';	
}
var ad_id = ad_desktop_id;
if(ad_desktop_text != undefined) {
	var ad_text = ad_desktop_text;
}

function headerAd() {
	document.getElementById("topAdvert").innerHTML='<div id="div-gpt-ad-' + ad_id + '-0"></div>';
	googletag.cmd.push(function() { googletag.display('div-gpt-ad-' + ad_id + '-0'); });
}

function footerAd() {
}

function createAd(target_id, position) {
	if(desktop_ads == 'y') {
		document.getElementById(target_id).innerHTML='<div id="div-gpt-ad-' + ad_id + '-' + position + '"></div>';
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-' + ad_id + '-' + position); });
	}
}