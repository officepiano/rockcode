jQuery(document).ready(function(jQuery) {

	globalDropDown();
	signupDropDown();
	megaNavDropDown();
	restNavDropDown();
	searchToggle();
	mobileSearch();
	scrollTop();
	sideBar();
	
});

function sideBar() {
	
	jQuery('aside#sidebar .button').mouseenter(function(){
		
		jQuery(this).find('a').addClass('active');
	    jQuery(this).find('.panel').show();
	
	}).mouseleave(function(){
		
		jQuery(this).find('a').removeClass('active');
		jQuery(this).find('.panel').hide();
		
	});
	
	
	jQuery('#sidebar .social a.click').click(function(event) {
		event.preventDefault();
	});
	
	jQuery("#pinterest_btn a").click(function(){
		
	    refreshPinterestButton = function (url, media, description) {
		var js, href, html, pinJs;
		url = escape(url);
		media = escape(media);
		description = escape(description);
		href = 'http://pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + description;
		html = '';
		jQuery('div.pin-it').html(html);

		//add pinterest js
		js = document.createElement('script');
		js.src = "http://assets.pinterest.com/js/pinit.js";
		js.type = 'text/javascript';
		document.body.appendChild(js);
		}
	});
	
}

function scrollTop() {
	jQuery('#top_link').click(function(event) {
		event.preventDefault();
		jQuery('html,body').animate({ scrollTop: 0 }, 'slow');
	});
	
}

function mobileSearch() {
	jQuery('#jo_nav_mob').click(function() {
		jQuery('#jo_nav').toggleClass('m-toggle');
	});
}


function globalDropDown() {
	
	// Set vars
	var navContainer = jQuery('#quick_links');	
	var navClick = jQuery('#quick_links_toggle');
	var navText = jQuery('#quick_links_toggle span');
	
	navContainer.css('display','none');
	navContainer.slideUp('0');
	
	// Click function
	navClick.click(function() {
		if (navClick.hasClass('quick_links_toggle')){
			
			navText.html('HIDE LINKS');
			navClick.removeClass('active');
			
			navContainer.slideDown('200', function() {
				navClick.removeClass('quick_links_toggle');
					navContainer.css('display','block');
			})
		
			
		} else {
			
			navText.html('QUICK LINKS');
			navClick.addClass('active');
			
			navContainer.slideUp('200', function() {
				navContainer.css('display','none');
			})
			
			navClick.addClass('quick_links_toggle');
			
		}
	});
}


function megaNavDropDown() {
	
	var timeout = null;

	jQuery("nav#jo .nav_recipes").mouseenter(function(){
		
	    jQuery('nav#meganav').stop(true, true).fadeIn(150); 
		jQuery("nav#jo .nav_recipes").addClass('active');
		jQuery("#restaurants_menu_wrapper").hide();
	
	
	}).mouseleave(function(){
		
		jQuery('nav#meganav').stop().fadeOut(150)
		jQuery("nav#jo .nav_recipes").removeClass('active');
		//if (timeout !== null) clearTimeout(timeout);
		//timeout = setTimeout(function() {jQuery('nav#meganav').stop(true, true).fadeOut(150);}, 1500);
		
		jQuery('.cat_primary').removeClass('cat_primary_active');
		jQuery('.cat_secondary ul').removeClass('active');
		jQuery('ul.cat_primary > li').removeClass('active');
		
	});
	 
	 
	jQuery('ul.cat_primary > li > a').mouseenter(function(event) {
		event.preventDefault();
		var liClass = jQuery(this).parent('li').attr('class').split(' ')[0];
		
		jQuery('.cat_primary').addClass('cat_primary_active');
		
		jQuery('ul.cat_primary > li').removeClass('active');
		jQuery(this).parent('li').addClass('active');
		
		jQuery('.cat_secondary ul').removeClass('active');
		jQuery('.cat_secondary ul.' + liClass).addClass('active');
	});
	
}

/*function GetURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('?');
	for (var i = 0; i < sURLVariables.length; i++)
	{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
		    return sParameterName[1];
		}
	}
}*/

function restNavDropDown() {
	
	//var slide = GetURLParameter('slide');

	jQuery(".nav_books_tv a").mouseenter(function(){

		jQuery('nav#jo .nav_books_tv').addClass('active');

		/*if(slide == 'y') {
			jQuery("#restaurants_menu_wrapper").stop().delay('50').slideDown('slow');
		} else {*/
			jQuery("#restaurants_menu_wrapper").show();
		//}
	
	});
			
	jQuery(".unactive").mouseleave(function(){
		
		if(window.location.pathname != '/restaurant') {

		jQuery('nav#jo .nav_books_tv').removeClass('active');
		/*if(slide == 'y') {
			jQuery("#restaurants_menu_wrapper").delay('250').slideUp('slow');
		} else {*/
			jQuery("#restaurants_menu_wrapper").hide();
		//}

		}
				
	});
	
	// Hides nav when hovered over any other link in the nav
	jQuery("#jo_nav li:not(.nav_books_tv) a").mouseenter(function(){
		jQuery("#restaurants_menu_wrapper").hide();
		jQuery('nav#jo .nav_books_tv').removeClass('active');
	});

}

function signupDropDown() {
	
	// Sign in
	jQuery('#member_login #member_links .sign_in a').click(function(event) {
		event.preventDefault();
		jQuery('#member_login #sign_in').addClass('m-toggle');
	});
	
	jQuery('#member_link').click(function(event) {
		// Stop link clicking through
		event.preventDefault();
		jQuery('#member_login #sign_in').toggleClass('m-toggle');
		
	});
	
	
	jQuery(document).mouseup(function (e)
	{
	    var container = jQuery('#member_login #sign_in');

	    if (container.has(e.target).length === 0)
	    {
	        container.removeClass('m-toggle');
	    }
	});
	
	// Sign out
	jQuery('#member_login #member_info .sign_out').click(function(e) {  /* ALV: added preventDefault */
		e.preventDefault();
		jQuery('#member_login #sign_out').toggleClass('m-toggle');		
	});

	
	jQuery('#member_link_out').click(function(event) {
		// Stop link clicking through
		event.preventDefault();
		jQuery('#member_login #sign_out').toggleClass('m-toggle');
	});

	jQuery(document).mouseup(function (e)
	{
	    var container = jQuery('#member_login #sign_in');

	    if (container.has(e.target).length === 0)
	    {
	        container.removeClass('m-toggle');
	    }
	});
	
}

function searchToggle() {
	jQuery('#search_toggle').toggle(
		function(){
	 		jQuery('nav#jo #global_search').removeClass('m-toggle');
			jQuery('nav#jo').animate({height:90},200);
	  	},
	  	function(){
	    	jQuery('nav#jo #global_search').addClass('m-toggle');
			jQuery('nav#jo').animate({height:45},200);
	  	}
	);

}