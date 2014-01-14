var tab = function(tab,cid,cclass){
		$('#'+tab).find('span').each(function(i){
			var me = $(this);
			$(this).bind('click',function(){
				if(me.hasClass('on')){
					return;
				}else{
					$('#'+tab).find('span').removeClass('on');
					me.addClass('on');
					$('#'+cid).find('.'+cclass).hide();
					$('#'+cid).find('.'+cclass+'_'+(i+1)).show();

				}
			})			  
		})
}
tab('tab1','content1','con')

$('.nav-font li').on('mouseenter',function() {
	$(this).find('div').show();
	$(this).addClass('on')
}).on('mouseleave' , function(){
	$(this).find('div').hide();
	$(this).removeClass('on');
	
});

