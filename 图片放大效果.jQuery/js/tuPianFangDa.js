!function () {
	var $div = $('#myDiv'),
	    $divXian = $div.find('.xianShi'),
	    $divA = $div.find('.div-a'),
	    $divB = $div.find('.div-b'),
	    $ula = $divA.find('ul'),
	    $ulaLi = $ula.find('li'),
	    $ulXian = $divXian.find('ul'),
	    $ulXLi = $ulXian.find('li'),
	    $olb = $divB.find('ol'),
	    $span = $divA.find('.div-span'),
	    $olbLi = $olb.find('li'),
	    width = $divA.width(),
	    n = 450/width,
	    height = $divA.height();
	    //console.log(width)
	    
	    $olbLi.on('click',function () {
	    	var $this = $(this),
	    	    index = $this.index();
	    	$this.addClass('on')
	    	.siblings('.on')
	    	.removeClass('on');
	    	$ulaLi
	    	.eq(index).show()
	    	.siblings()
	    	.hide();
	    	$ulXLi
	    	.eq(index).show()
	    	.siblings()
	    	.hide();
	    	
	    })
	    $divA.on('mouseover',function () {
	    	$span.add($divXian).show();
	    }).on('mouseout',function () {
	    	$span.add($divXian).hide();
	    })
	    
/*	    $divA.hover(function () {
	    	$span.add($divXian).show();
	    	
	    },function () {
	    	$span.add($divXian).hide();
	    })	   
	    .on('mousemove',function (e) {
			var x = e.clientX;
			var y = e.clientY;
	
			$span.css(
				{
					top:y-50,
					left:x-50
				});
	   });*/
	
	
	    $divA.on('mousemove',function (e) {
			var x = e.clientX;
			var y = e.clientY;
			if (x+50>width) {
				x = width-50;
			}else if (x<50) {
				x = 50;
			}
			if (y+50>height) {
				y = height - 50;
			}else if (y<50) {
				y = 50;
			}			
			$span.css({top:y-50,left:x-50});	
			$ulXLi
			.css('background-position',-x*n+100 + 'px'+ ' ' + (-y*n +100) + 'px' )
	    })
}();
