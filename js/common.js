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

	$(".sandwich-menu, .menu_item").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$(".sandwich-menu").click(function() {
		if ($(".top-menu").is(":visible")) {
			$(".top-menu").fadeOut(400);
		} else {
			$(".top-menu").fadeIn(400);
		};	
	});
	
});

$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
