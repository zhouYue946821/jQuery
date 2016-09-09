!function () {
	var $divZg = $('.myDiv'),
	    $divYi = $divZg.find('.yiDong'),
	    $divXian =$divZg.find('.xianShi'),
	    $imgwdh = $divZg.find('.img-wdh'),
	    imgWidth = $imgwdh.width(),
	    width = $divZg.width(),
	    n = imgWidth/width,
	    height = $divZg.height();
	    
	    console.log(n)
	    
		$divZg.hover(function() {
			$divYi.add($divXian).show();
		},function() {
			$divYi.add($divXian).hide();
		})
		.on('mousemove',function(e) {
			//console.log(e)
			var x = e.clientX;
			var y = e.clientY;
			if (x+100>width) {
				x = width-100;
			}else if (x<100) {
				x = 100;
			}
			if (y+100>height) {
				y = height - 100;
			}else if (y<100) {
				y = 100;
			}
			$divYi
			.css({top:y-100,left:x-100});
			$divXian
			.css('background-position',-x*n+200 + 'px'+ ' ' + (-y*n +200) + 'px' );
		})

}();
