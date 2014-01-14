jQuery(document).ready(function(jQuery) {
	//eventHover();
	//recipeHover();
	topCarousel();
	panelClass();
	panelClassTrigger();
	feedButtonHoverRight();
	removeFilters();
	filterSlideDown();
	searchFilter();
	recipeCategoryDrop();
	customSelect();
	laguageHide();
	//feedButtonHover('More', 'More');
	
	jQuery('#recipe_slider').carousel();
	
	if(isMobile()){
		
		//do nothing
		}else{
		jQuery("[id^='hover-displayer']").css("display","none");
		jQuery("[id^='container-for-hovers']").hover(function(){
	
			jQuery(this).find('#hover-displayer').css("display","block");
				
			}, function(){
			
			jQuery(this).find('#hover-displayer').css("display","none");
			
		
		});
		}
});

function laguageHide(){
	jQuery('#popup-lang .popup-close').click(function(event) {
		event.preventDefault();
		jQuery('#popup-lang').fadeOut(400);
	});
}

function feedButtonHover(copyLeft, copyRight){
	
	// Left vars
	$('#related_recipe_carousel #carousel-nav .left span').html(copyLeft);
	$('#related_recipe_carousel #carousel-nav .left').css('width', 'auto');
		
	
	// Get width of text
	var autowidthLeft = $('#related_recipe_carousel #carousel-nav .left').width();
	var autowidthLeft = autowidthLeft + 20;
	
	
	// Right vars
	$('#related_recipe_carousel #carousel-nav .right span').html(copyRight);
	$('#related_recipe_carousel #carousel-nav .right').css('width', 'auto');
		
	
	// Get width of text
	var autowidthRight = $('#related_recipe_carousel #carousel-nav .right').width();
	var autowidthRight = autowidthRight + 20;
	
	// Clear text
	$('#related_recipe_carousel #carousel-nav .left span').animate({
		opacity: 0
	}, 0, function() {
		$('#related_recipe_carousel #carousel-nav .left span').html('');
	});
	
	$('#related_recipe_carousel #carousel-nav .right span').animate({
		opacity: 0
	}, 0, function() {
		$('#related_recipe_carousel #carousel-nav .right span').html('');
	});
	
	// Set back to default
	$('#related_recipe_carousel #carousel-nav a').css('width', '40px');
	$('#related_recipe_carousel #carousel-nav a').css('padding', '0');
	$('#related_recipe_carousel #carousel-nav a').css('text-indent', '-9999px');
	
	// Hover functions
	$('#related_recipe_carousel #carousel-nav .left').mouseover(function(){
		
		$(this).css('padding', '0 20px 0 60px');
		$(this).stop().animate({width:autowidthLeft});
		$(this).css('text-indent', '0');
		$('#related_recipe_carousel #carousel-nav .left').addClass('toggle');
		$(this).find('span').animate({
			opacity: 1
		}, 400, function() {
			$('#related_recipe_carousel #carousel-nav .left span').html(copyLeft);
			$('#related_recipe_carousel #carousel-nav .right').removeClass('toggle');
		});
	});


	$('#related_recipe_carousel #carousel-nav .left').mouseleave(function(){
		$(this).find('span').html('');
		$('#related_recipe_carousel #carousel-nav .left').removeClass('toggle');
		$(this).find('span').animate({
			opacity: 0
		}, 0, function() {
			// Animation complete
		});
		$(this).css('padding', '0');
		$(this).stop().animate({width:40});
		$(this).css('text-indent', '-9999px');
	});
	
	$('#related_recipe_carousel #carousel-nav .right').mouseover(function(){
		
		$(this).css('padding', '0 60px 0 20px');
		$(this).stop().animate({width:autowidthRight});
		$(this).css('text-indent', '0');
		$('#related_recipe_carousel #carousel-nav .right').addClass('toggle');
		$(this).find('span').animate({
			opacity: 1
		}, 400, function() {
			$('#related_recipe_carousel #carousel-nav .right span').html(copyRight);
		});
	});
	

	$('#related_recipe_carousel #carousel-nav .right').mouseleave(function(){
		$(this).find('span').html('');
		$('#related_recipe_carousel #carousel-nav .right').removeClass('toggle');
		$(this).find('span').animate({
			opacity: 0
		}, 0, function() {
			// Animation complete
		});
		
		$(this).css('padding', '0');
		$(this).stop().animate({width:40});
		$(this).css('text-indent', '-9999px');
	});
	
}

function recipeCategoryDrop(){
	
	
	jQuery('.search_categories li a').click(function(event) {
		
		event.preventDefault();
		
		var navID = jQuery(this).parent('li').attr('id');	
	
		if (jQuery('#search_categories_list div.' +  navID).hasClass('m-toggle')) {
		
			
			jQuery('#search_categories_list div.' +  navID).slideUp('200', function() {
				jQuery('#search_categories_list div.' +  navID).removeClass('m-toggle');
				
			})
			
		}
		
		else if (jQuery('#search_categories_list div').hasClass('m-toggle')) {
		
			
				jQuery('#search_categories_list div').removeClass('m-toggle');
				jQuery('#search_categories_list div').css('display', 'none');
				
		
				jQuery('#search_categories_list div.' +  navID).addClass('m-toggle');
				jQuery('#search_categories_list div.' +  navID).css('display', 'block');
			
		
			
		} else {
			
				
			jQuery('#search_categories_list div.' +  navID).slideDown('200', function() {
				jQuery('#search_categories_list div.' +  navID).addClass('m-toggle');
				jQuery('#search_categories_list div.' +  navID).css('display', 'block');
			})
			
		}
		
		
		
	});
	

}

function searchCategory() {
	
	jQuery('#nav_recipes').css('display', 'none');
	
	jQuery('#jo #jo_nav li a.dropdown').click(function(event) {
		
		event.preventDefault();
		
		var navID = jQuery(this).parent('li').attr('class');		
		
	
		if (jQuery('#meganav section#' +  navID).hasClass('m-toggle')) {
			
			jQuery('#meganav section#' +  navID).slideUp('200', function() {
				jQuery('#meganav section#' +  navID).removeClass('m-toggle');
				jQuery('nav#jo').removeClass('toggle');
			})
			
		} else {
			jQuery('#meganav section').removeClass('m-toggle');
			
			jQuery('nav#jo').addClass('toggle'); 
						
			jQuery('#meganav section#' +  navID).slideDown('200', function() {
				jQuery('#meganav section#' +  navID).addClass('m-toggle');
			})
		}
		
		
		
	});
}

// Custom select background trigger
function customSelect(){
	//jQuery('#search_sorting select').selectbox();
}

function searchFilter(){
	jQuery('.search_filtering #search_filters ul').each( function() {
		
		jQuery(this).addClass('active');		
		var aHeight = jQuery(this).height();
		
		jQuery(this).removeClass('active');
		var iHeight = jQuery(this).height();
		
		
		jQuery(this).find('.header').toggle(function (e) {

			jQuery(this).parent('ul').stop().animate({
				height:aHeight
			}, 200, function() {
				jQuery(this).addClass('active');  ;
			});
			

		}, function(){
			
			jQuery(this).parent('ul').stop().animate({
				height:iHeight
			}, 200, function() {
				jQuery(this).removeClass('active');	
			});

	    });
		
	});
	

}


function removeFilters(){
	jQuery('#filter_list a.clear_filters').click(function(event) {
		event.preventDefault();
		jQuery('#filter_list form input:checkbox').removeAttr('checked');
	});
	
	jQuery('.search_filtering a.reset_filters').click(function(event) {
		event.preventDefault();
		jQuery('#search_filters ul input:checkbox').removeAttr('checked');
	});
}

function filterSlideDown(){
	
	
	// Only one checkbox
	
	$('.single_select').each(function() {
		
		var $unique = $(this).find('input');

		$unique.click(function() {
			$unique.filter(':checked').not(this).removeAttr('checked');
		});
		
	});
	
	
	
	
	
	
	// Get original height
   	var openHeight = jQuery('#recipe_filter').height();
	jQuery('#recipe_filtered_filter').addClass('toggle');
	
	if (jQuery('#recipe_filtered_filter').hasClass('show')){
		jQuery('#recipe_filter').stop().animate({
			height:openHeight
			}, 200, function() {
				jQuery('#recipe_filtered_filter').removeClass('toggle');
			});
	}


	jQuery('.filter_toggle').toggle(function (e) {
		
		   jQuery('#recipe_filter').stop().animate({
			height:openHeight
			}, 200, function() {
				jQuery('#recipe_filtered_filter').removeClass('toggle');
			});
		
		}, function(){
		    
			jQuery('#recipe_filter').stop().animate({
			height:0
			}, 200, function() {
				jQuery('#recipe_filtered_filter').addClass('toggle');
			});
		
    });

	jQuery('.filter_close').click(function(event) {
		event.preventDefault();
		jQuery('#recipe_filter').stop().animate({
		height:0
		}, 200, function() {
			jQuery('#recipe_filtered_filter').addClass('toggle');
		});
	});
	
}

function panelClass(){
	// Set classes for no-active panes
	var panel1 = jQuery('#recipe_carousel .panel1');
	var panel2 = jQuery('#recipe_carousel .panel2');
	var panel3 = jQuery('#recipe_carousel .panel3');
	
	function panelClearClass(){
		panel1.removeClass('left2 left1 right1 right2');
		panel2.removeClass('left2 left1 right1 right2');
		panel3.removeClass('left2 left1 right1 right2');
	}

	if (panel1.hasClass('active')) {
		panelClearClass();
		panel2.addClass('right1');
		panel3.addClass('right2');
	}

	if (panel2.hasClass('active')) {
		panelClearClass();
		panel1.addClass('left1');
		panel3.addClass('right1');
	}

	if (panel3.hasClass('active')) {
		panelClearClass();
		panel1.addClass('left2');
		panel2.addClass('left1');
	}
	

}

function panelClassTrigger(){
	jQuery('body').on('slid', function (e) {
		panelClass();
	});
}

function topCarousel(){

	jQuery('.carousel').each(function(){
		jQuery(this).carousel({
			interval: 0
		});
	});
	
	// Set vars
	var feed = jQuery('#recipe_carousel');
	var panel = ('#recipe_carousel #feed_container .slide');
	var panelLinks = ('#recipe_carousel #feed_container .inactive a');
	var panelCount = jQuery('#recipe_carousel #feed_container .slide').size();
	var feedContainer = jQuery('#recipe_carousel #feed_container');

	

	// Remove linking from inactive panels

	var currentSlide = 2; // Starts on slide 2
		
	// Hide nav buttons
	if (panelCount == 1 ) {
		//jQuery('#recipe_carousel #carousel-nav').hide();
	}
	
	// Hide nav buttons
	if (currentSlide == 1 ) {
		jQuery('#recipe_carousel #carousel-nav .left').hide();
	}
	
	if (currentSlide == 3 ) {
		jQuery('#recipe_carousel #carousel-nav .right').hide();
	}
	
	jQuery('#recipe_carousel #carousel-nav .right').click(function() {
	  currentSlide = currentSlide + 1;
	});
	
	jQuery('#recipe_carousel #carousel-nav .left').click(function() {
	  currentSlide = currentSlide - 1;
	});
	
	jQuery('#feed_mask').on('slide', function(evt) {
	  
	
		// Hide nav buttons
		if (currentSlide == 1 ) {
			jQuery('#recipe_carousel #carousel-nav .left').hide();
		} else {
			jQuery('#recipe_carousel #carousel-nav .left').show();
		}
		
		if (currentSlide == panelCount ) {
			jQuery('#recipe_carousel #carousel-nav .right').hide();
		} else {
			jQuery('#recipe_carousel #carousel-nav .right').show();
		}
		
	});	
}


///////////////

function feedButtonHoverRight(copy){
	
	jQuery('#recipe_carousel #carousel-nav .right').html(copy);
	jQuery('#recipe_carousel #carousel-nav .right').css('width', 'auto');
	
	// Get width of text
	var autowidth = jQuery('#recipe_carousel #carousel-nav .right').width();
	var autowidth = autowidth + 20;
	
	// Set back to default
	jQuery('#recipe_carousel #carousel-nav a').css('width', '40px');
	jQuery('#recipe_carousel #carousel-nav a').css('padding', '0');
	jQuery('#recipe_carousel #carousel-nav a').css('text-indent', '-9999px');
}

///////////////

function recipeHover(){

	jQuery('.panel .trigger').hover(function () {
		if (jQuery(this).hasClass('triggerOff')){
			jQuery(this).find('.blue-arrow-off').toggleClass('bgHover');
		} else {
			jQuery(this).find('.tools-holder').stop().slideToggle('fast');
 			jQuery(this).find('.blue-arrow-off').stop().toggle();
		}
    });

	jQuery('.panel h3').hover(function () {
		jQuery(this).parent('article').find('.blue-arrow-off').toggleClass('bgHover');
    });
}

function eventHover(){
	
	jQuery('#event_promo .panel, #featured_recipe_list .panel, #recipe_filtered .panel').each( function() {

		// Get original title
	    var title = jQuery(this).find('h3 a');
	    var longText = title.html();

		// Truncate title
	    var shortText = longText; /*jQuery.trim(longText).substring(0, 50)
	        .split(' ').slice(0, -1).join(' ') + '...';*/
	
		// Get original height
	   	var largeHeight = jQuery(this).find('.copy').height();
	   	//console.log(largeHeight);
	   
		// Set title to short version + add class
	    title.html(shortText);
		jQuery(this).addClass('hover');	
		
		// Get mew small height
		var smallHeight = jQuery(this).find('.copy').height();
		//console.log(smallHeight);	
			
	    jQuery(this).data({ shortText: shortText, longText: longText, largeHeight: largeHeight, smallHeight: smallHeight});
	
	});
	
	
	jQuery('#event_promo .panel .trigger, #featured_recipe_list .panel .trigger, #recipe_filtered .panel .trigger').mouseenter(function () {

	    var longText = jQuery(this).closest('.panel').data('longText');
	    var shortText = jQuery(this).closest('.panel').data('shortText');
		var largeHeight = jQuery(this).closest('.panel').data('largeHeight');
		
		jQuery(this).find('h3 a').html(longText);
		
		jQuery(this).find('.copy').stop().animate({height:largeHeight},200);
		jQuery(this).parent().removeClass('hover');
	
	});
	
	jQuery('#event_promo .panel .trigger, #featured_recipe_list .panel .trigger, #recipe_filtered .panel .trigger').mouseleave(function () {

	    var longText = jQuery(this).closest('.panel').data('longText');
	    var shortText = jQuery(this).closest('.panel').data('shortText');
		var smallHeight = jQuery(this).closest('.panel').data('smallHeight');
	
	    jQuery(this).find('h3 a').html(shortText);
	
		jQuery(this).find('.copy').stop().animate({height:smallHeight},200);
		jQuery(this).parent().addClass('hover');
	
	});

}

function isMobile(){
			return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
		}


		