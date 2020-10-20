$(document).ready(function() {


	// ----- menu mobile -----

	$('.js-nav-link').click(function() {
		$('.mobile-nav, .mobile-nav-bg').removeClass('show');
		$('body').removeClass('no-scroll');
	});

	$('.mobile-nav-bg').click(function() {
		$('.mobile-nav-bg, .mobile-nav').removeClass('show');
		$('body').removeClass('no-scroll');
	});

	$('.show-menu').on('click', function() {
		$('.mobile-nav, .mobile-nav-bg').toggleClass('show');
		$('body').toggleClass('no-scroll');
	});

	$('.navbar-toggler').on('click', function() {
		$('.navbar-toggler').toggleClass('active');
	});
	$('.mobile-nav-bg, .js-nav-link').click(function() {
		$('.navbar-toggler').removeClass('active');
	});

	// ----- end menu mobile -----




// SMOOTH SCROLL TO ANCHOR
	$('.link-smooth').click(function(event) {
		$('body, html').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top-30
		}, 900);
		event.preventDefault();
	});



	// owl-carousel js-owl-home-logos
	let owl1 = $('.js-owl-home-logos');
	owl1.owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				autoplay:true,
				items:3
			},
			545:{
				autoplay:true,
				items:4
			},
			768:{
				autoplay:true,
				items:6
			},
			991:{
				autoplay:true,
				items:8
			},
			1200:{
				autoplay:true,
				items:10
			}
		}
	});


	// owl-carousel js-owl-reviews
	let owl2 = $('.js-owl-reviews');
	owl2.owlCarousel({
		nav:true,
		responsive:{
			0:{
				autoplay:true,
				items:1
			},
			545:{
				autoplay:true,
				items:1
			},
			768:{
				autoplay:true,
				items:2
			},
			991:{
				items:2
			},
			1200:{
				items:3
			}
		}
	});

});