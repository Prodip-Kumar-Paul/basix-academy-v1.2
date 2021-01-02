//alert("owl");

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
