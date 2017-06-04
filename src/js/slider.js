'use strict';

$(function() {

	$('.slider-next-main').on('click', function nextSlide() {

		let 
			slide = $('.slider-element-main'),
			dot = $('.dot-main'),
			activeSlide = slide.filter('.active'),
			activeDot = dot.filter('.active'),
			nextSlide = activeSlide.next(),
			nextDot = activeDot.next(),
			prevSlide = activeSlide.prev();

		if (nextSlide.length) {
			activeSlide.removeClass('active').css('z-index', -10);
			activeDot.removeClass('active');
			nextSlide.addClass('active').css('z-index', 10);
			nextDot.addClass('active');
		} else if (prevSlide.length == 1) {
			var firstSlide = slide.first();
			var firstDot = dot.first();
			activeSlide.removeClass('active').css('z-index', -10);
			activeDot.removeClass('active');
			firstSlide.addClass('active').css('z-index', 10);
			firstDot.addClass('active');
		}

	});

	$('.slider-prev-main').on('click', function() {

		let 
			slide = $('.slider-element-main'),
			dot = $('.dot-main'),
			activeSlide = slide.filter('.active'),
			activeDot = dot.filter('.active'),
			nextSlide = activeSlide.next(),
			prevSlide = activeSlide.prev(),
			prevDot = activeDot.prev();

		if (prevSlide.length) {
			activeSlide.removeClass('active').css('z-index', -10);
			activeDot.removeClass('active');
			prevSlide.addClass('active').css('z-index', 10);
			prevDot.addClass('active');
		} else if (nextSlide.length == 1) {
			var lastSlide = slide.last();
			var lastDot = dot.last();
			activeSlide.removeClass('active').css('z-index', -10);
			activeDot.removeClass('active');
			lastSlide.addClass('active').css('z-index', 10);
			lastDot.addClass('active');
		}

	});

		$('.dot-main').on('click', function() {

	});

	function autoSlide() {

		let 
			slide = $('.slider-element-main'),
			dot = $('.dot-main'),
			activeSlide = slide.filter('.active'),
			activeDot = dot.filter('.active'),
			nextSlide = activeSlide.next(),
			nextDot = activeDot.next(),
			prevSlide = activeSlide.prev();

		if (nextSlide.length) {
			activeSlide.removeClass('active').css('z-index', -10);
			activeDot.removeClass('active');
			nextSlide.addClass('active').css('z-index', 10);
			nextDot.addClass('active');
		} else if (prevSlide.length == 1) {
			var firstSlide = slide.first();
			var firstDot = dot.first();
			activeSlide.removeClass('active').css('z-index', -10);
			activeDot.removeClass('active');
			firstSlide.addClass('active').css('z-index', 10);
			firstDot.addClass('active');
		}
	}
setInterval(autoSlide, 5000);﻿

});