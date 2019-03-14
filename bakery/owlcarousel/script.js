/*carousel */
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
/*to top*/
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
/*map loading*/
$(function() {
	if(navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i)) {
		$('.loading').hide();
	}
	$('.image').load(function() {
		$(this).parent().find(".loading").hide();
	});
});
/*menu show and hide*/
// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.menu_item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = 
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  