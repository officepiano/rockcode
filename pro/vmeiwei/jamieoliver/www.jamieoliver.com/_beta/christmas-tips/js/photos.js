jQuery(document).ready(function($) {
//	articleHover();
});


function articleHover(){
	
	$('#content.photos .grid article').mouseover(function(){
		$(this).addClass('active');
	});
	$('#content.photos .grid article').mouseout(function(){
		$(this).removeClass('active');
	});
	
}