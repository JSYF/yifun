$(window).load(function(){	
	var aniCon = $(".ani_con");
	var imgEl = $(".content a img");
	var P = $(".content a p");
	var iHeight =imgEl.height();
	
	//获取初始img高度
	aniCon.css(
		'height',iHeight
	);
	//获取初始img高度 end
	
	//获取初始head高度
	$(".nav").children("a").click(function(){
		var _headH = $(".head").height();
		var navName = $(this).attr('class');
		$("html,body").stop().animate({
			scrollTop:$("."+navName+"1").offset().top - _headH
		},1000)
	});
	//获取初始head高度 end
	
	//动态获取的高度
	$(window).resize(function(){
		//获取img改变高度
		var _iHeight =imgEl.height();
		//获取head改变高度
		var headH = $(".head").height();
		//console.log(headH);
		aniCon.css(
			'height',_iHeight
		)
		//锚点跳转
		$(".nav").children("a").click(function(){
			var navName = $(this).attr('class');
			$("html,body").animate({
				scrollTop:$("."+navName+"1").offset().top - headH
			},1000)
		})
		//锚点跳转 end
	});
	//动态获取高度 end
	
	//给img加上遮罩效果以及文字颜色的改变
	$(".content a").hover(function(){
		$(this).children(".ani_con").fadeIn();
		$(this).children(P).css({
			color:"#000",
		})
	},function(){
		$(this).children(".ani_con").fadeOut();
		$(this).children(P).css({
			color:"#666",
		})
	})
	//给img加上遮罩效果以及文字颜色的改变  end
	
	//join的跳转
	var locationHash =location.hash;
	if(locationHash){
		var _headH = $(".head").height();
		switch(locationHash){
			case '#work':
				$("html,body").stop().animate({
					scrollTop:$(".work1").offset().top - _headH
				},1000)
			break;
			case '#home':
				$("html,body").stop().animate({
					scrollTop:$(".home1").offset().top - _headH
				},1000)
			break;
			case '#contact':
				$("html,body").stop().animate({
					scrollTop:$(".contact1").offset().top - _headH
				},1000)
			break;
		}
	}
})
