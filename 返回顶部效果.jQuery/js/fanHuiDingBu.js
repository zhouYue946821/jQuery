!function (window, document, $ ,undefined) {
	var $div = $('#myDiv');

	$(window).on('scroll', function() {
		var $this = $(this);
		var h = $this.height();
		var st = $this.scrollTop();
				
		if (st > h) {
			$div.slideDown();
		} else {
			$div.slideUp();
		};
	});	
	$('#myDiv').on('click', function () {
		//document.body.scrollTop = 0;
		$('body').animate({scrollTop: 0}, 500);
	});			
}(window, document, jQuery);
