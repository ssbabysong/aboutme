$(function(){
    $('#knowme').click(function(){
        var scroll_offset = $("#page2").offset();  //得到page2这个div层的offset，包含两个值，top和left
	  	$("body,html").animate({
	   		scrollTop:scroll_offset.top  //让body的scrollTop等于page2的top，就实现了滚动
	   	},2000);
    });
    $('.arrow').click(function(){
        var scroll_offset = $("#page2").offset();  //得到page2这个div层的offset，包含两个值，top和left
	  	$("body,html").animate({
	   		scrollTop:scroll_offset.top  //让body的scrollTop等于page2的top，就实现了滚动
	   	},2000);
    });
    	$(window).scroll(function(){
	    var mytop = $(window).scrollTop();
	    // console.log($('#navbarmain'));
	    if(mytop>730){
	    	//console.log('1');
	    	$('#navbarmain').fadeIn(200);
	    }else{
	    	//console.log('2');
	    	$('#navbarmain').fadeOut(200);
		}
	});


    var switchSpeed = 3000;         //图片切换时间  
	var fadeSpeed = 1000;           //渐变时间  
	setInterval(function(){  
	    $('.picshow').last().fadeOut(fadeSpeed, function(){  
	        $(this).show().prependTo($('#pic'));  
	    });  
	}, switchSpeed); 


    var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 600})
						.setPin("#pin1")
						// .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
						.addTo(controller);
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 1050})
						.setPin("#pin2")
						// .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
						.addTo(controller);
});


