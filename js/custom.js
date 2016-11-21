$(document).ready(function(){


	// menu button


	$(".toggle-button").click(function(){

		$(".header-block nav").toggleClass("active-menu");
	});

	$(".toggle-button").click(function() {

	  $(".sandwich").toggleClass("active");

	});

	$("nav a").click(function(){

		$(".header-block nav").toggleClass("active-menu");
		$(".sandwich").toggleClass("active");

	});

	// .content-wrap height


	$( window ).resize(function() {

		var headerHeight = $(".header-block").innerHeight();

		var bodyHeight = $(window).innerHeight();
		
		var contentHeight = bodyHeight - headerHeight
		
		$(".content-wrap").height(contentHeight);

	//alert(bodyHeight)

	}).resize();


}); // ready()


