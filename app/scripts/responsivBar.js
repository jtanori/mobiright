define(function(){
	console.log(' responsiv bar');
	var responsivBar = function(){
	    var width = $(window).width();
	    var height = $(window).height();
	    var offer_wall_h = 0;
	    var offer_wall = $(".discovery_offer_wall");
	    var bars_amount = $(".discovery_offer_wall .discovery_offer_list").length;
	    if(width>height) {   
	        $('.discovery_offer_photo').width(width*0.1);
	        $('.discovery_offer_photo').height(width*0.1);
	        $('.discovery_install_button').width(width*0.23);
	        $('.discovery_install_button').height(72*width*0.22/257);
	        $('.discovery_install_button').css("right","18%");
	        $('.discovery_offer_list').css("width","80%");
	        $('.discovery_offer_list').height(width*0.1);
	        $('.discovery_rates_back').width(width*0.18);
	        $('.discovery_stars').width(width*0.18);
	        $('.discovery_rates_star').each(function(){
	            $(this).width(width*0.18*$(this).attr('value')/5);
	        });  
	        $('.discovery_install_button').css('margin-top',($('.discovery_offer_photo').height()-$('.discovery_install_button').height())*0.55+'px');
	    } else {     
	        $('.discovery_offer_photo').width(width*0.18);
	        $('.discovery_offer_photo').height(width*0.18);
	        $('.discovery_install_button').width(width*0.27);
	        $('.discovery_install_button').height(72*width*0.27/257);
	        $('.discovery_install_button').css("right","8%");
	        $('.discovery_offer_list').css("width","90%");
	        $('.discovery_offer_list').height(width*0.18);
	        $('.discovery_rates_back').width(width*0.28);
	        $('.discovery_stars').width(width*0.28);
	        $('.discovery_rates_star').each(function(){
	            $(this).width(width*0.28*$(this).attr('value')/5);
	        });  
	        $('.discovery_install_button').css('margin-top',($('.discovery_offer_photo').height()-$('.discovery_install_button').height())*0.6+'px');
	    }
	    if(width<320){
	        $('#discovery_caption_label').css('font-size',width*16/320+'px');
	        $('#discovery_bar_icon').width(width*0.1);
	        $('#discovery_bar_icon').height(width*0.1);
	        $('.discovery_icon_img').width(width*0.2);
	        $('.discovery_icon_img').height(width*0.1);
	        //$('.discovery_centerbar').width($('#discovery_caption_label').width() + width*0.1 + 10);
	    } else {
	        $('#discovery_caption_label').css('font-size','16px');
	        $('#discovery_bar_icon').width(30);
	        $('#discovery_bar_icon').height(30);
	        $('.discovery_icon_img').width(60);
	        $('.discovery_icon_img').height(30);
	        //$('.discovery_centerbar').width($('#discovery_caption_label').width() + 30 + 10);
	    }
	    if(width>height) {   
	        offer_wall_h = $('.discovery_offer_list').height() * 1.30 * (2 > bars_amount ? bars_amount : 2);
	    } else {     
	        offer_wall_h = $('.discovery_offer_list').height() * 1.2 * (4 > bars_amount ? bars_amount : 4);
	    }
	    //$('.discovery_offer_wall').css({height: offer_wall_h, bottom: -1 * offer_wall_h});
	    offer_wall.css({height: offer_wall_h});             
	                                 
	    ///////////  init mobile bar  ////////////
	    var mobilebar = $(".discovery_mobilebar");
	    var captionbar = $(".discovery_captionbar");
	    var mobilebar_t = height-50;
	    mobilebar.css("top",mobilebar_t);
	    if(openItemFlag == "OPEN"){
	        offer_wall.css("top",-offer_wall_h);
	        offer_wall.css('display','block');
	        barheight = offer_wall.height()+captionbar.outerHeight();
	    } else {
	        offer_wall.css("top",0);
	        offer_wall.css('display','none');
	        barheight = captionbar.outerHeight();
	    }
	     
	    $("#discovery_scroll_content").css("height",height);
	    /*

	        alert("winHeight:"+window.innerHeight);
	        alert("Height:"+captionbar.outerHeight());
	        alert("Top:"+mobilebar_t);
	    */
	      
	        
	    $('.discovery_offer_name').css('font-size',($('.discovery_offer_list').height()*18/70)+'px');
	    $('.discovery_offer_user').css('font-size',($('.discovery_offer_list').height()*14/70)+'px');
	    
	    // special functions for IE
	    if(/msie/.test(navigator.userAgent.toLowerCase())){
	        /*var discovery_centerbar = $(".discovery_centerbar");
	        var discovery_centerbar_w = discovery_centerbar.width();
	        var discovery_centerbar_parent_w = $(".discovery_centerbar").parent().width();
	        discovery_centerbar.css("margin-left", discovery_centerbar_parent_w/2 - discovery_centerbar_w/2);*/
	    }
	}

	return responsivBar;
});