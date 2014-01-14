jQuery(document).ready(function($) {
	jQuery('#home_feed #carousel-nav .left').hide();
	homeFeed();
	var copLeft = "1";
	var copMid = "2"; 
	var copRight = "3";
	feedButtonHover(copLeft, copMid, copRight);
	panelClass(copLeft, copMid, copRight);
	panelClassTrigger(copLeft, copMid, copRight);
	carouselSwap();


	MW.tab('tab1','tab1-box');
	MW.slider({
		width : 1440,
		cellWidth : 720,
		carouselOutBox : 'slider-a',
		carouselInnerBox : 'slider-1-w-a'
	})
	MW.slider({
		width : 1440,
		cellWidth : 720,
		carouselOutBox : 'slider-b',
		carouselInnerBox : 'slider-1-w-b'
	})
	MW.slider({
		width : 1440,
		cellWidth : 720,
		carouselOutBox : 'slider-c',
		carouselInnerBox : 'slider-1-w-c'
	})

	//$('#whats_hot_carousel').carousel();
});

function carouselSwap(){
	
	$('#news_blogs .top .panel_switch li a').click(function(event) {
		
		// Stop link clicking through
		event.preventDefault();
		
		//  Clicked nav link	
		var panelLinkThis = $(this).closest('li');
		
		// Get corresponding carousel number
		var carouselNo = $(this).attr('class');
		var carouselNo = '.' + carouselNo;

		$('#news_blogs .bottom .sliding_carousel').removeClass('active');
		$('#news_blogs .bottom .sliding_carousel' + carouselNo).addClass('active');
		
	});
}

function homeFeed(){

	jQuery('.carousel').each(function(){
		jQuery(this).carousel({
			interval: 0
		});
	});
	
	// Set vars
	var feed = $('#home_feed');
	var panel = $('#home_feed #feed_container .slide');
	var panelLinks = $('#home_feed #feed_container .inactive a');
	var panelCount = $('#home_feed #feed_container .slide').size();
	var feedContainer = $('#home_feed #feed_container');

	var currentSlide = 2; // Starts on slide 2
			
	jQuery('#home_feed #carousel-nav .right').click(function() {
	  currentSlide = currentSlide + 1;
	});
	
	jQuery('#home_feed #carousel-nav .left').click(function() {
	  currentSlide = currentSlide - 1;
	});
	
	
	jQuery('#feed_mask').on('slide', function(evt) {
		
	});	
}

function feedButtonHover(copLeft, copMid, copRight){
	
	// Left vars
	$('#home_feed #carousel-nav .left').css('width', '125');
		
	// Get width of text
	var autowidthLeft = $('#home_feed #carousel-nav .left').width();
	var autowidthLeft = autowidthLeft + 20;
	
	// Right vars
	$('#home_feed #carousel-nav .right').css('width', '125');
		
	// Get width of text
	var autowidthRight = $('#home_feed #carousel-nav .right').width();
	var autowidthRight = autowidthRight + 20;
		
	// Set back to default
	$('#home_feed #carousel-nav a').css('width', '40px');
	$('#home_feed #carousel-nav a').css('padding', '0');
	$('#home_feed #carousel-nav a').css('text-indent', '-9999px');
	
	// Hover functions
	$('#home_feed #carousel-nav .left').mouseover(function(){
		
		$(this).css('padding', '0 20px 0 60px');
		$(this).stop().animate({width:autowidthLeft});
		$(this).css('text-indent', '0');
		$('#home_feed #carousel-nav .left').addClass('toggle');
		$(this).find('span').animate({
			opacity: 1
		}, 400, function() {
			var panel2 = $('#home_feed .panel2');
			var panel3 = $('#home_feed .panel3');

			if (panel2.hasClass('active')) {
				var copyLeft = copLeft;
			}

			if (panel3.hasClass('active')) {
				var copyLeft = copMid;
			}

			$('#home_feed #carousel-nav .left span').html(copyLeft);
			$('#home_feed #carousel-nav .right').removeClass('toggle');
		});
	});


	$('#home_feed #carousel-nav .left').mouseleave(function(){
		$(this).find('span').html('');
		$('#home_feed #carousel-nav .left').removeClass('toggle');
		$(this).find('span').animate({
			opacity: 0
		}, 0, function() {
			// Animation complete
		});
		$(this).css('padding', '0');
		$(this).stop().animate({width:40});
		$(this).css('text-indent', '-9999px');
	});
	
	$('#home_feed #carousel-nav .right').mouseover(function(){
		
		$(this).css('padding', '0 60px 0 20px');
		$(this).stop().animate({width:autowidthRight});
		$(this).css('text-indent', '0');
		$('#home_feed #carousel-nav .right').addClass('toggle');
		$(this).find('span').animate({
			opacity: 1
		}, 400, function() {
			var panel1 = $('#home_feed .panel1');
			var panel2 = $('#home_feed .panel2');

			if (panel1.hasClass('active')) {
				var copyRight = copMid;
			}

			if (panel2.hasClass('active')) {
				var copyRight = copRight;
			}

			$('#home_feed #carousel-nav .right span').html(copyRight);
		});
	});
	

	$('#home_feed #carousel-nav .right').mouseleave(function(){
		$(this).find('span').html('');
		$('#home_feed #carousel-nav .right').removeClass('toggle');
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

function panelClass(copLeft, copMid, copRight){
	// Set classes for no-active panes
	var panel1 = $('#home_feed .panel1');
	var panel2 = $('#home_feed .panel2');
	var panel3 = $('#home_feed .panel3');
	
	function panelClearClass(){
		panel1.removeClass('left2 left1 right1 right2');
		panel2.removeClass('left2 left1 right1 right2');
		panel3.removeClass('left2 left1 right1 right2');
	}

	if (panel1.hasClass('active')) {
		panelClearClass();
		panel2.addClass('right1');
		panel3.addClass('right2');
		jQuery('#home_feed #carousel-nav .left').hide();
		$('#home_feed #carousel-nav .right span').html(copMid);
	}

	if (panel2.hasClass('active')) {
		panelClearClass();
		panel1.addClass('left1');
		panel3.addClass('right1');
		jQuery('#home_feed #carousel-nav .left').show();
		jQuery('#home_feed #carousel-nav .right').show();
		$('#home_feed #carousel-nav .left span').html(copLeft);
		$('#home_feed #carousel-nav .right span').html(copRight);
	}

	if (panel3.hasClass('active')) {
		panelClearClass();
		panel1.addClass('left2');
		panel2.addClass('left1');
		jQuery('#home_feed #carousel-nav .right').hide();
		$('#home_feed #carousel-nav .left span').html(copMid);
	}
	

}

function panelClassTrigger(copLeft, copMid, copRight){
	$('body').on('slid', function (e) {
		panelClass(copLeft, copMid, copRight);
	});
}