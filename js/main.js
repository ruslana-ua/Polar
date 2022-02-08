$(function () {
	$(window).scroll(function () {
		$('.block-advantage__body').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.block-details__body').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.block-product__body').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.block-app__body').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.block-question__body').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.wrapper-product__row').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.wrapper-reviews__slider').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.footer__body').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 1100) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
})