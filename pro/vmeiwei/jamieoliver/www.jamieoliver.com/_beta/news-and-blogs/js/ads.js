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

googletag.cmd.push(function() {
googletag.defineSlot('/3595/JamieOliver/NewsAndBlogs', [728, 90], 'div-gpt-ad-1352719117887-0').addService(googletag.pubads());
googletag.defineSlot('/3595/JamieOliver/NewsAndBlogs', [300, 250], 'div-gpt-ad-1352719117887-1').addService(googletag.pubads())
.setTargeting("pos","top");
googletag.defineSlot('/3595/JamieOliver/NewsAndBlogs', [[300, 250], [300, 600]], 'div-gpt-ad-1352719117887-2').addService(googletag.pubads())
.setTargeting("pos","bottom");
googletag.defineSlot('/3595/JamieOliver/NewsAndBlogs', [[300, 120], [300, 400]], 'div-gpt-ad-1352719117887-3').addService(googletag.pubads());
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});
