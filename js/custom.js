(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});

	var toggle_bar;
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		toggle_bar = 1;
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$( "#logo_total" ).animate( {height: "45px", 'margin-top': "-100px"},{queue:false,duration:200,
			 	complete : function(){
			 		if(toggle_bar){
						 $( "#logo_total" ).addClass('hidden');
						 $( "#logo_head" ).removeClass('hidden');
					 }
				}
			});

		} else {
			toggle_bar=0;
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$( "#logo_head" ).addClass('hidden');
			$( "#logo_total" ).removeClass('hidden');
			$( "#logo_total" ).animate( {height: "38vw", 'margin-top': "0px"},{queue:false,duration:200,
				complete : function(){
				}
			});

		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
