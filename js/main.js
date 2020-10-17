$(document).ready(function() {


	// ----- smaller menu and mobile -----
	$(window).scroll(function() {
	if ($(document).scrollTop() > 150) {
		$('.gotop-btn').addClass('visible');
	}
	else {
		$('.gotop-btn').removeClass('visible'); }
	});

	// ----- smaller menu and mobile -----
	$(window).scroll(function() {
	if ($(document).scrollTop() > 150) {
		$('.header_content').addClass('smaller-menu');
	}
	else {
		$('.header_content').removeClass('smaller-menu'); }
	});

	$(window).scroll(function() {
	if ($(document).scrollTop() > 500) {
		$('.header_content').addClass('show');
	}
	else {
		$('.header_content').removeClass('show'); }
	});

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

	// ----- end smaller menu and mobile -----




// SMOOTH SCROLL TO ANCHOR
	$('.link-smooth').click(function(event) {
		$('body, html').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top-30
		}, 900);
		event.preventDefault();
	});

// SMOOTH SCROLL TO ANCHOR
	$('.link-smooth-2').click(function(event) {
		$('body, html').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top-75
		}, 900);
		event.preventDefault();
	});



	// owl-carousel js-owl-home-logos
	var owl1 = $('.js-owl-home-logos');
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
	// $('.js-portfolio-btn-prev-1').click(function(event) {
	// 	event.preventDefault();
	// 	owl1.trigger('prev.owl.carousel');
	// });
	// $('.js-portfolio-btn-next-1').click(function(event) {
	// 	event.preventDefault();
	// 	owl1.trigger('next.owl.carousel');
	// });


	// owl-carousel js-owl-reviews
	var owl2 = $('.js-owl-reviews');
	owl2.owlCarousel({
			// loop:true,
			// margin:35,
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
						// autoplay:true,
						items:3
					},
					1200:{
						// autoplay:true,
						items:4
					}
			}
	});

});