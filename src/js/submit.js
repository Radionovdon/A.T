'use strict';

$(function() {

	$('.search-submit').on('click', function(e) {

		e.preventDefault();

		$('.modal').css({display: 'block'});
		$('.modal-overlay').fadeIn(500).css({display: 'block'});

		var close = $('.button-close');

		close.on('click', function() {
			$('.modal-overlay').fadeOut(1000);
		});

	});

	$('.contacts-icon').on('click', function() {

		$('.modal-partnership').css({display: 'block'});
		$('.modal-overlay-partnership').fadeIn(500).css({display: 'block'});
		$('.header-menu.fixed').css({display: 'none'});

		$(document).click(function (e) {
			if ($(e.target).closest('.modal-partnership').length == 0 && $(e.target).attr('class') != 'contacts-icon') {
				$('.modal-overlay-partnership').hide();
			}
		});

	});

});