'use strict';

$(function(){

	let menuOffset = $('main').offset();

	$(document).on('scroll', function(){

		let scrollTop = $(document).scrollTop();

		if (scrollTop > menuOffset.top) {
			$('.header-menu').addClass('fixed');
		} else {
			$('.header-menu').removeClass('fixed');
		}
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