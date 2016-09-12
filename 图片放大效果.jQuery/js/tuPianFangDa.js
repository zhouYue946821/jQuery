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
	    width = $ulaLi.width(),
	    spanW = $span.width(),
	    spanH = $span.height(),
	    $a = $div.find('a'),
	    n = 450/width,
	    height = $divA.height();
	    
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
	    
	    $divA.on('mousemove',function (e) {
	    	
	    	var x = e.pageX - $divA.offset().left - spanW/2;
	    	var y = e.pageY - $divA.offset().top - spanH/2;

	    	
			var by = e.pageY - $divXian.height() / 2;
			var bx = e.pageX - $divXian.width() / 2;	    	
	    	console.log(x)
			if (x+spanW>width) {
				x = width-spanW;
			}else if (x<=0) {
				x = 0;
			}
			if (y+spanH>height) {
				y = height - spanH;
			}else if (y<=0) {
				y = 0;
			};	    	
	    	$span.css({top:y,left:x});
	    	$ulXLi
	    	.css('background-position',-bx + 'px'+ ' ' + (-by) + 'px' );
	    	
/*			var x = e.pageX;
			var y = e.pageY;
			console.log(e)
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
			.css('background-position',-x*n+100 + 'px'+ ' ' + (-y*n +100) + 'px' )*/
	   });
	   
	   $a.on('click',function () {
	   	var $this = $(this);	   	
	   	    if ($this.hasClass('color')) {
	   	        $olb.animate({'margin-left':'-65px'},500);
	   	    }else {
	   	    	$olb.animate({'margin-left':0},500)
	   	    }; 	
	   	    console.log($a.eq(0))
   	    
	   	    if ($olb.css('margin-left')=='0px') {
	   	    	$this.removeClass('color');
	   	    	$a.eq(1).addClass('color');
	   	    };
	   	    if($olb.css('margin-left','-65px')) {
	   	    	$a.eq(1).removeClass('color');
	   	    	$a.eq(0).addClass('color');
	   	    };		   	    
	   });
	   
}();
