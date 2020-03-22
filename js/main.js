$('.work-slider-1').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	// nextArrow: $('.next-arrow-1'),
	// prevArrow: $('.prev-arrow-1'),
	autoplay: true,
	autoplaySpeed: 2000,
});

$('.work-slider-2').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	// nextArrow: $('.next-arrow-1'),
	// prevArrow: $('.prev-arrow-1'),
	autoplay: true,
	autoplaySpeed: 2000,
});
$('.work-slider-3').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	// nextArrow: $('.next-arrow-1'),
	// prevArrow: $('.prev-arrow-1'),
	autoplay: true,
	autoplaySpeed: 2000,
});
$('.services-slider').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: true,
	// nextArrow: $('.next-arrow-1'),
	// prevArrow: $('.prev-arrow-1'),
	autoplay: true,
	autoplaySpeed: 2000,
	variableWidth: true,
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
/* ---------- */