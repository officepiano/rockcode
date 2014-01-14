/*
plugin for the animation on tabs clicking 

TO USE THIS PLUGIN

the tabs HAVE TO HAVE THE STRUCTURE
<ul id="mytabs"><li>/<li><li></li>? .... </ul>

to make it work it is enought to add the class "alvtabs" to the ul, otherwhise we'll call

	jQuery("#myUlWithTabs").alvtabs(
			{		
			'margin_top' : 434,
			'content_item_class' : 'latest_campaigns_tabs_content',
			'default_selected' : 0,
			'callback' : function(){ whatever you want to do after the click }
			});
	check the params to adjunt variables. The most important is the "callback" param, which allows to exectute a function when the "li" is clicked
*/


// to do: create a function to get the x pos for the arrow of an li



(function($){


 	$.fn.extend({ 
 		

 		alvtabs: function(options) {



         //Set the default values, use comma to separate the settings, example:
            var defaults = {
				speed_offset_1: 500,
				speed_offset_2: 100,
				speed_offset_3: 50,
				margin_top: 0,
				bg_arrow_image: "auto",				
                mov_offset_1: 10,
                mov_offset_2 : 15,   
				pos_offsets: {}, /* specific offsets for thearrow on every li, set it like { 0: "-5", 1 : "10" } */
				arrow_div_height: 10,
				content_item_class : null,
				default_selected : 0,
				selected_class: "selected",
				callback: null,

				jul: null,
				arrow_div:null,
				jwrapper:null
				
            }
			var options =  jQuery.extend(defaults, options);


			//Iterate over the current set of matched elements
    		return this.each(function() {			
				var o = options;

	

				o.jul = jQuery(this);
				top_position  = (o.margin_top == "auto")? o.jul.height() - o.arrow_div_height : o.margin_top;
				img_root = (typeof(MyJS) !== 'undefined')? MyJS.themeurl : ""; // to complete				
				bg_arrow_image = (o.bg_arrow_image == "auto")? img_root+"/_inc/images/tip.png" : o.bg_arrow_image;

				o.jul.wrap('<div id="alvwrapper-'+o.jul.attr("id")+'" class="alvtabs-wrapper" />').before("<div class='alvtabs-arrow' id='arrow-"+o.jul.attr("id")+"' style='position:absolute; background:url("+bg_arrow_image+") no-repeat center bottom; margin-top:"+(top_position)+"px; width:30px; height:"+o.arrow_div_height+"px;'></div>");
				o.jwrapper = jQuery('#alvwrapper-'+o.jul.attr("id"));

				o.arrow_div = jQuery("#arrow-"+o.jul.attr("id"));				
				first_button = o.jul.find("li").eq(o.default_selected);
				o.jul.find("li").removeClass(o.selected_class); first_button.addClass(o.selected_class);
				if ((o.content_item_class))/* default: we hide all contents except the selected one */
					jQuery("."+o.content_item_class).not(":eq("+o.default_selected+")").hide();
				

				//debugging:	alert(first_button.offset().left+" - " +o.jul.offset().left+" + "+first_button.outerWidth(true) +" /2  - "+ arrow_div.width()+" / 2 ");

				o.arrow_div.css({ "left": middle_x(first_button), "top" : (bottom_y(o.jwrapper)+o.margin_top ) });

				o.jul.find("li").bind("click", function(e){
					jli = jQuery(this);
					x_pos = middle_x(jli);					
					y_pos = bottom_y(o.jwrapper) + o.margin_top;

					left_to_right = 1;
					if (parseInt(o.arrow_div.css("left")) > parseInt(x_pos)) left_to_right = -1; /* arrow will move from right to left */

					mov_offset_1 = o.mov_offset_1*left_to_right;
					mov_offset_2 = o.mov_offset_2*left_to_right;

					/* THE ANIMATION in three steps */
					o.arrow_div.animate({left: (x_pos + mov_offset_1) }, o.speed_offset_1,function(){
						o.arrow_div.animate({ left: (x_pos - mov_offset_2) }, o.speed_offset_2,  function() {
							o.arrow_div.animate({ left: x_pos}, o.speed_offset_3 );
							o.arrow_div.animate({ top: y_pos}, o.speed_offset_3 );
						} )
					});
					o.jul.find("li").removeClass(o.selected_class); jli.addClass(o.selected_class);

					/*clicking on the tab will display a content: if specified, we show it and hide the others */
					if ((o.content_item_class)){
						var content_divs = jQuery("."+o.content_item_class);
						content_divs.hide();
						content_divs.eq(jQuery(this).index()).fadeIn();;	
					}

					if (o.callback !== null) o.callback.call(this);

				});

				function middle_x(jelement)
				{ 				  
					particular_offset = ( o.pos_offsets[jelement.index()] !== undefined )? o.pos_offsets[jelement.index()] : 0 ;
					padding_n_margin = jelement.outerWidth() - jelement.width();
				    var width = jelement.outerWidth() - (padding_n_margin / 2) - (jelement.width() / 2) - (o.arrow_div.outerWidth() / 2) + parseInt(particular_offset);
					return jelement.position().left + width;
				}
				function bottom_y(jelement)
				{
					return  jelement.position().top + jelement.outerHeight();
				}
				$(window).resize(function(){
					jli = o.jul.find("."+o.selected_class);
					o.arrow_div.css({"left":middle_x(jli), "top":(bottom_y(o.jwrapper)+o.margin_top) });
	            });
    		});
    	}
	});
	
//pass jQuery to the function, 
//So that we will able to use any valid Javascript variable name 
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )		
})(jQuery);






jQuery(document).ready(function($) {
	
	jQuery(".alvtabs").alvtabs({}); // generic one



	/* FOR THE EAT WELL TAB IN HOW TO PAGE */
/*	jQuery("#content.how-to #unorderedList").alvtabs(
			{		
			'margin_top' : 7,
			'offset_1': 20,
			'callback' : function() {
				indexElement = jQuery(this).index();
				jQuery(".season_this_month_container").fadeOut("fast", function(){
					jQuery(".season_this_month_container").eq(indexElement).fadeIn();
				});			
			}	
			});
*/
	








});

