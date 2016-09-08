!function (window, document, $ ,undefined) {
	function huaDong ($myDiv)  {
/*	 	$dianJi = $myDiv.find('#dianJi');	 	
	 	$dianJi.on('click', function () {
	 		
	 		if ($myDiv.css('left') == '0px') {
	 			$myDiv.animate({left: -50},500)
	 		}else {
	 			$myDiv.animate({left: 0},500)
	 		}
	 	});*/
	 	
	 	$myDiv.on('mouseenter', function () {	 		
	 		$myDiv.animate({left: 0},500);
	 	});
	 	$myDiv.on('mouseleave', function () {
	 		$myDiv.animate({left: -50},500);
	 	});	 	
	};
	huaDong($('#myDiv'));	
}(window, document , jQuery );
