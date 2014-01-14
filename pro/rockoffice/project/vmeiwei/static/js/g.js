function dropDown(tag,list) {
	
	var timeout = null;

	$("#"+tag).mouseenter(function(){
		var droplist = $('#'+list);
		if (timeout !== null) clearTimeout(timeout);

		droplist.stop(true, true).fadeIn(150); 
	   	    $("#"+tag).removeClass('down').addClass('up');
	    
		//$("nav#jo .nav_recipes").addClass('active');
		
	
	
	}).mouseleave(function(){
		var droplist = $('#'+list);
		timeout = setTimeout(function(){
			droplist.stop(true, true).fadeOut(150); 
			$("#"+tag).removeClass('up').addClass('down');
		},200)
	});
	$("#"+list).mouseenter(function(){
		if (timeout !== null) clearTimeout(timeout);
	}).mouseleave(function(){
		var droplist = $('#'+list);
		timeout = setTimeout(function(){
			droplist.stop(true, true).fadeOut(150); 
			$("#"+tag).removeClass('up').addClass('down');
		},200)
	});
}
function scrollTop() {
	jQuery('#top_link').click(function(event) {
		event.preventDefault();
		jQuery('html,body').animate({ scrollTop: 0 }, 'slow');
	});
	
}
var MW = {}

MW.tab = function(tab,box){

	$( "#"+tab ).on( "click", "span", function() {
	  var id = $( this ).data('num');
	  $('.'+tab).removeClass('on');
	  $(this).addClass('on');
	  $("."+box).hide();
	  $("#"+box + id).show();
	});
}

MW.slider = function(op){
	var w = op.width;
	var cellWidth = op.cellWidth;
	var out = $('#' + op.carouselOutBox);
	var inner = $('#' + op.carouselInnerBox);
	var left = out.find('.left');
	var right = out.find('.right');
	out.on('click','.carousel-control',function(){
		var l = parseInt(inner.css('left'));
		if($(this).data('slide') == 'prev'){
			left.hide();
			right.hide();
			inner.animate({
				left:l-cellWidth 
			},"slow",function(){
				var nl = parseInt(inner.css('left'));

				if(-nl +  cellWidth >= w){
					right.show();
				}
			});	
		}else{
			left.hide();
			right.hide();
			inner.animate({
				left:l+cellWidth 
			},"slow",function(){
				var nl = parseInt(inner.css('left'));
	
				if(nl == 0){
					left.show();
				}
			});
		}
		
	})
}

$(document).ready(function(jQuery) {

	dropDown('navtag_1','navlist_1');
	dropDown('navtag_2','navlist_2');
	dropDown('navtag_3','navlist_3');
	dropDown('navtag_4','navlist_4');
	scrollTop();
	
});

