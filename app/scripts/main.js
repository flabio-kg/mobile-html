$('.js-navtrigger').click(function() {
	$(this).toggleClass('-active');
	$('.mobile__menu_mnu').toggleClass('_mobile');
});

$('.owl-carousel').owlCarousel({
	items: 1,
	loop: true,
	margin: 10,
	nav: true,
	navText: ''
})

$('.popup-link').magnificPopup({
	type:'inline',
	midClick: true
});

$(document).ready(function(){
    $('#phone').mask('+7 (999) 999-99-99');
});