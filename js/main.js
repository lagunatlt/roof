// AOS.init();

$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.header__top').addClass('fixed-top');
		} else {
			$('.header__top').removeClass('fixed-top');
		}
	});
});

$('.work-slider-1').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	// nextArrow: $('.next-arrow-1'),
	// prevArrow: $('.prev-arrow-1'),
	// autoplay: true,
	// autoplaySpeed: 2000,
});

$('.work-slider-2').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	// nextArrow: $('.next-arrow-1'),
	// prevArrow: $('.prev-arrow-1'),
	// autoplay: true,
	// autoplaySpeed: 2000,
});
$('.work-slider-3').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	// nextArrow: $('.next-arrow-1'),
	// prevArrow: $('.prev-arrow-1'),
	// autoplay: true,
	// autoplaySpeed: 2000,
});
$('.services-slider').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: true,
	// nextArrow: $('.next-arrow-1'),
	// prevArrow: $('.prev-arrow-1'),
	// autoplay: true,
	// autoplaySpeed: 2000,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 961,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 721,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 641,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		}
	]
});


/* accordion */
let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
	accordions[i].onclick = function () {
		this.classList.toggle('is-open');
		this.classList.toggle('rotate');

		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	};
}
/* ----------- */
/* запрес на скролл яндекс карт */
document.addEventListener('click', function (e) {
	var map = document.querySelector('#map-wrap iframe')
	if (e.target.id === 'map-wrap') {
		map.style.pointerEvents = 'all'
	} else {
		map.style.pointerEvents = 'none'
	}
})
/* -----вызов модального окна по истечении времени----- */
$(document).ready(function () {
	setTimeout(function() {
		$("#hidden-promo").fancybox().trigger('click');
	}, 60000)
});

/* -------вызов модалки по достижении блока------- */
// var offset = 600;
// $(window).scroll(function () {
// 	var scrolltop = $(this).scrollTop();
// 	$('.how-work').each(function () {
// 		if (scrolltop >= $(this).offset().top - offset) {
// 			// $(this).removeClass('hide');
// 			$("#hidden-promo").fancybox().trigger('click');
// 		}
// 	});
// });
/* ------------------ */

/* mask */
window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		var keyCode;

		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)

	});

});
/* ----------- */