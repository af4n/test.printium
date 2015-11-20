$(document).ready(function() {
	
	function heightDetect() {
		$(".main-head").css("height", $(document).height());
	};

	heightDetect();
	$(window).resize(function() {
	});

	$(document).ready(function(){
  		$('.bxslider').bxSlider();
	});
	
});

$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
