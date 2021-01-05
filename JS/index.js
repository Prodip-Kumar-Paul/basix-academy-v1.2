// alert("back-to-top");

$(document).ready(function(){
$(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        300:{
            items:1,
            // nav:true
        },
        800:{
            items:2,
            autoplay: true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        },
        1200:{
            items:4,
            autoplay: true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        }
    }
});

// create the back to top button

var amountScrolled = 700;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top, a.simple-back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
	return false;
});
