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

//initialise desktop ads
if(desktop_ads == 'y') {

	var sky_x = 728;
	var sky_y = 90;

	var mpu_x = 300;
	var mpu_y = 250;

	var double_x = 300;
	var double_y = 600;

	var mobile = '';

	var googletag = googletag || {};
	googletag.cmd = googletag.cmd || [];
	(function() {
	var gads = document.createElement('script');
	gads.async = true;
	gads.type = 'text/javascript';
	var useSSL = 'https:' == document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') + 
	'//www.googletagservices.com/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
	})();

//initialise mobile ads
} else {

	ad_id = ad_mobile_id;
	if(ad_mobile_text != undefined) {
		var ad_text = ad_mobile_text;
	}

	var sky_x = 6;
	var sky_y = 1;

	var mpu_x = 6;
	var mpu_y = 1;

	var double_x = 6;
	var double_y = 1;

	var mobile = 'Mobile';

	(function() {
	var useSSL = 'https:' == document.location.protocol;
	var src = (useSSL ? 'https:' : 'http:') +
	'//www.googletagservices.com/tag/js/gpt_mobile.js';
	document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
	})();

}

function headerAd() {
	if(desktop_ads == 'y') {
		document.write('<section id="top_banner" style="background: #292929;"><div class="cntr">');
		document.write("<div id='div-gpt-ad-" + ad_id + "-0'>");
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-' + ad_id + '-0'); });
		document.write("</div>");
		document.write('</div></section>');
	}
}

function footerAd() {
	if(desktop_ads == 'y') {
		//desktop code
	} else {
		document.write("<div id='div-gpt-ad-" + ad_id + "-0'>");
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-' + ad_id + '-0'); });
		document.write("</div>");
	}
}
