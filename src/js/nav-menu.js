'use strict';

$(function(){

	var h_hght = 0;
	var h_mrg = 0;

	$(window).scroll(function(){

		var top = $(this).scrollTop();
		var elem = $('.header-menu');

		if (top+h_mrg < h_hght) {
			elem.css('top', (h_hght-top));
			
		} else {
			elem.css('top', h_mrg);
		}

		var a = $(".solutions-list-row").css('opacity');
		if ( top >= 700 && a == 0) {$(".solutions-list-row").stop().animate({'opacity':'1', 'top': '200'},1500)};
		if ( top < 700 && a == 1) {$(".solutions-list-row").stop().animate({'opacity':'0'},1500)};

	});

	let section1OffsetTop = $('.home').offset().top;
	let section2OffsetTop = $('.solutions').offset().top;
	let section3OffsetTop = $('.clients').offset().top;
	let section4OffsetTop = $('.team').offset().top;
	let section5OffsetTop = $('.contacts').offset().top;

	$(document).on('scroll', function() {

		let scrollTop = $(document).scrollTop();
		let activeLi;

		if (scrollTop < section2OffsetTop) {
			activeLi = $('.header-menu-list>.header-menu-element:nth-child(2)');
		} else if (scrollTop < section3OffsetTop) {
			activeLi = $('.header-menu-list>.header-menu-element:nth-child(3)');
		} else if (scrollTop < section4OffsetTop) {
			activeLi = $('.header-menu-list>.header-menu-element:nth-child(4)');
		} else if (scrollTop < section5OffsetTop) {
			activeLi = $('.header-menu-list>.header-menu-element:nth-child(5)');
		} else {
			activeLi = $('.header-menu-list>.header-menu-element:nth-child(6)');
		}

		activeLi.addClass('active');
		$('.header-menu-element').not(activeLi).removeClass('active');

	});

	$('.header-menu').on('click','a', function (e) {
		e.preventDefault();
		let id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	$('.footer-menu').on('click','a', function (e) {
		e.preventDefault();
		let id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

});