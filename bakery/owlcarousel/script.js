$(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                items:1,
                loop: true,
                dots: false,
                nav: true,
                navText : ['',''],
                smartSpeed: 800,
                autoplay: true,
                autoplayHoverPause: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn'             
            });
        });
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
$(function() {
	if(navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i)) {
		$('.loading').hide();
	}
	$('.image').load(function() {
		$(this).parent().find(".loading").hide();
	});
});
