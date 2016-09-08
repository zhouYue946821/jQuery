!function (window,document ,$ ,undefined) {
	var $myDiv = $('#myDiv'),
	    $ul = $('.myDivUl'),
	    width = $ul.find('li').width(),
	    len = $ul.find('li').length,
	    timer;
	$ul.width(len * width);	    
	$ul.append($ul.find('li').clone());  

	//console.log($ul.width(len * width))	
	function xunHuan () {
	    timer = setInterval(function (){
				$ul.animate({'marginLeft':-width}, 500, function () {
					$ul				
					.append($ul.find('li:first-child'))
					.css('margin-left',0)					
				});				
			},2000)		
	};	
	xunHuan();
	$myDiv.hover(function () {
		clearInterval(timer);
	},function () {
		xunHuan();
	})
		
}(window, document, jQuery);
