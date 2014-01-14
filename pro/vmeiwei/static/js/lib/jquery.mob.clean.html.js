var z = 'n';
var $ = jQuery.noConflict();


// check for window resize 
$(window).resize(function() {
	if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});

// function to remove elements from the dom
function removeFromDom () {
	$('#videos_intro_bg .col4').hide();
	$('#videos_lower_container_bg').hide();
}

// function to move elements alround within the dom
function appendDomElements () {	
	el = $('.video_info .data .left a').detach();
	$('.video_info .data .left').empty().append(el);
	$('.page-numbers').wrapInner('<strong/>');
	$('.bbp-pagination-links .next').addClass('next_page');
	$('.bbp-pagination-links .next_page').removeClass('next');	
	$('.bbp-pagination-links .prev').addClass('prev_page');
	$('.bbp-pagination-links .prev_page').removeClass('prev');
	
}

// function to add new class names to elements
function addClasses() {
	$('.play_btn').addClass('ui_buttons-ui_play_btn');
	$('.ui_buttons-ui_play_btn').removeClass('play_btn');
	$('.video_info .data .left a').addClass('button');	
	$('#footer #top_link').addClass('ui_buttons-ui_bk_top_btn');
	$('.footer_bottom .col_5').addClass('footer_add_area');	
	$('.footer_add_area').removeClass('col col_5');
	var footerImgURL = '/_beta/images/mob/home_pob_backgrounds/footer_background.jpg';
		
	$('.footer_add_area').css('background', 'url(' + footerImgURL + ') no-repeat');
	$('.footer_add_area').css({'background-size' : '110%'});
	$('.blogs_sub_heading').css({'font-size':'2em'});
	//$('#event_promo article').removeClass('col1 col2 col3');
	//$('#video_recipes article').removeClass('col1 col2');
	$('.event_promo_border_none').css({'border':'none'});
	
}

// function to check screen size ()
function maxScreenSize (){
	
	if ($('body').width() <= 699) {
		if(z == 'n'){
			z = 'y';		
			appendDomElements();
			removeFromDom();
			addClasses();
		}			
	}

}

// button toggle functions
function buttonToggles(){
	

	
	
	$('.user_postcode').toggle(function () {
	   $('.return_location').show();
	}, function () {
	    $('.return_location').hide();
	});
	
	
	
	
	$('.popular_video_cats_menu h4').click(function () {
		$('.popular_video_cats_menu .dropDown_info').slideToggle('slow');
	});
	
	$('.popular_video_cats_menu h4').toggle(function () {
	   $('.popular_video_cats_menu h4').css({'background-position': '100% -260px'});
	}, function () {
	    $('.popular_video_cats_menu h4').css({'background-position' : '100% -219px'});
	});
	
	$('.top_keyword_menu h4').click(function () {
		$('.top_keyword_menu .dropDown_info').slideToggle('slow');
	});
	
	$('.top_keyword_menu h4').toggle(function () {
	   $('.top_keyword_menu h4').css({'background-position': '100% -260px'});
	}, function () {
	    $('.top_keyword_menu h4').css({'background-position' : '100% -219px'});
	});
	
	$('.popular_recipe_menu h4').click(function () {
		$('.popular_recipe_menu .dropDown_info').slideToggle('slow');
	});
	
	$('.popular_recipe_menu h4').toggle(function () {
	   $('.popular_recipe_menu h4').css({'background-position': '100% -260px'});
	}, function () {
	    $('.popular_recipe_menu h4').css({'background-position' : '100% -219px'});
	});
	
	$('.nutritional_info_menu h4').click(function () {
		$('.nutritional_info_menu .dropDown_info').slideToggle('slow');
	});
	
	$('.nutritional_info_menu h4').toggle(function () {
	   $('.nutritional_info_menu h4').css({'background-position': '100% -260px'});
	}, function () {
	    $('.nutritional_info_menu h4').css({'background-position' : '100% -219px'});
	});
	
	$('.comments_info_menu h4').click(function () {
		$('.comments_info_menu .dropDown_info').slideToggle('slow');
	});
	
	$('.comments_info_menu h4').toggle(function () {
	   $('.comments_info_menu h4').css({'background-position': '100% -260px'});
	}, function () {
	    $('.comments_info_menu h4').css({'background-position' : '100% -219px'});
	});
	
}

$(document).ready(function() {  	
	console.log($(window).width());
	// media query event handlers
	if (matchMedia) {
		var mq385 = window.matchMedia("(max-width: 699px)");
		mq385.addListener(WidthChange);
		WidthChange(mq385);
	}
	
	// function to find a matching path within the menu and add the active class to the parent li node.
	$("#mob_menu li a").filter(function(){
	    el = this.href == location.href.replace(/#.*/, "");
		if(el == true) {
			$(this.parentNode).addClass('mm-selected active');	
		}		
	});
	
	
	$('#disqus_thread').css({'width':'90%', 'padding':'10px'});
	// media query change handlers
	function WidthChange(mq385) {
		if (mq385.matches) {
			// media query matched at 385px;
			maxScreenSize ();
			buttonToggles();
			$('.ui_buttons-ui_bk_top_btn').insertBefore($('#footer'));
			$('.more_video_btn').show();
			$('.footer_bottom .col_5').addClass('footer_add_area');	
			$('.footer_add_area').removeClass('col col_5');			
			$('.featured_heading').show();
			$('#videos_lower_container_bg').hide();
		} else {
			// window width is less than 500px
			// As we don't need to assign the content area to the mod nav section
			// we move the element back to it's original position within the dom.
			$('.more_video_btn').hide();				
			$('.footer_add_area').addClass('col col_5');			
			$('.footer_bottom .col_5').removeClass('footer_add_area');
			$('.featured_heading').hide();
		
			$('#videos_intro_bg .col4').show();
			$('#videos_lower_container_bg').show();
			$('#top_link').insertAfter('#social_links_footer');	
					
		}
	}
	
	// function to find the frist letter within the submenu and wrap it within a span.
	$('#mob_menu ul li a').each(function(){ 
		// Split text at each period. 
		var text = $(this).text().split('.'); 
			for( var i = 0; i < 1; i++ ) { 
				// Wrap first letter in span. 
				var first_letter = '<span class="uppercase">' + text[i].substr(0,1) + '</span>'; 
				// Wrap sentence in span. 
				text[i] = '' + first_letter + text[i].substring(1, text[i].length) + ''; 
			} 			
			$(this).html(text.join('.'));			
		});	
		
		// function to find the frist letter within the submenu and wrap it within a span.
		$('.video_post_btn').each(function(){ 
		// Split text at each period. 
		var text = $(this).text().split('.'); 
		for( var i = 0; i < 1; i++ ) { 
			// Wrap first letter in span. 
			var first_letter = '<span class="uppercase">' + text[i].substr(0,1) + '</span>'; 
			// Wrap sentence in span. 
			text[i] = '' + first_letter + text[i].substring(1, text[i].length) + ''; 
		} 			
		$(this).html(text.join('.'));			
		});	

		// function to find the frist letter within the submenu and wrap it within a span.
		$('.video_info .data .left .button').each(function(){ 
		// Split text at each period. 
		var text = $(this).text().split('.'); 
			for( var i = 0; i < 1; i++ ) { 
				// Wrap first letter in span. 
				var first_letter = '<span class="uppercase">' + text[i].substr(0,1) + '</span>'; 
				// Wrap sentence in span. 
				text[i] = '' + first_letter + text[i].substring(1, text[i].length) + ''; 
			} 			
			$(this).html(text.join('.'));			
		});
		

	// function to toggle open the search popup
	//open 
	$("#mob_menusearch").toggle( function() {
		$('.close_right_btn').css({ 'background-color': '#000000'});
		$('#mob_popup_search_box').slideDown('slow');
		$('#mob_menusearch').addClass('header_icons-search_active');
		$('#mob_menusearch').removeClass('header_icons-header_search_icon');
		}, function () {
		$('#mob_popup_search_box').slideUp('slow');
		$('#mob_menusearch').removeClass('header_icons-search_active');
		$('#mob_menusearch').addClass('header_icons-header_search_icon');
		$('.close_right_btn').removeAttr('style');
	});
	
	
	
	//close
	$('.header_icons-mob_popup_search_box_close').bind('touchstart mousedown click', function(){
		$('#mob_popup_search_box').slideUp('slow');
		$('#mob_menusearch').removeClass('header_icons-search_active');
		$('#mob_menusearch').addClass('header_icons-header_search_icon');
		$('.close_right_btn').removeAttr('style');
	 });

	
});








