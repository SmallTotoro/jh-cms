// ---------------------------------------
// Custom JS
// ---------------------------------------

// Preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

// Init Fastclick
$(function() {
    FastClick.attach(document.body);
});

// -----------------------------
//  Smooth scroll
// ----------------------------
$(document).ready(function() {
    $('.navbar-nav li a, .banner a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// -----------------------------
//  CSS3 Transition
// -----------------------------
$('*').each(function(){
	if($(this).attr('data-animation')) {
		var $animationName = $(this).attr('data-animation'),
			$animationDelay = "delay-"+$(this).attr('data-animation-delay');
		$(this).appear(function() {
			$(this).addClass('animated').addClass($animationName);
			$(this).addClass('animated').addClass($animationDelay);
		});
	}
});



// -----------------------------
// Isotope filtering
// -----------------------------
$(function(){
    var $container = $('.isotope');
    // init
    $container.imagesLoaded( function() {
        $container.isotope({ 
            itemSelector: ".item",
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer"
            }
        });
    });
    // filter items when filter link is clicked
    $('#filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
});

// -----------------------------
// Masonry /Blog List/
// ----------------------------
$(function(){
    var $masonry = $('#list-masonry');
    // init
    $masonry.imagesLoaded( function() {
        $masonry.isotope({ 
            itemSelector: "#list-masonry>div",
            masonry: {
                columnWidth: "#list-masonry>div"                
                }
        });
    });    
});

//------------------------------
// Owl Slider
//------------------------------
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
});
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});
// -----------------------------
// Count To
// -----------------------------
$('.number').appear(function() {
    $('.number').countTo();
});

// -----------------------------
// Magnific Popup
// -----------------------------

$('.magnific').magnificPopup({
  type:'image',
  removalDelay: 300,
  mainClass: 'mfp-fade'
});
  
$('.magnific-youtube, .magnific-vimeo').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 300,
  preloader: false,
  fixedContentPos: false
});


// -----------------------------
// Easy Pie Chart
// -----------------------------
$('.chart').appear(function() {
    $('.chart').easyPieChart({
        barColor: "#fff",//default, set optionaly in html data-bar-color option
        trackColor: "transparent",
        //scaleColor: "#CCC",
        scaleLength: 0,
        lineCap: "square",
        lineWidth: 5,
        animate: 2000,
        onStart: function() {
            $('.percent').countTo({
                speed: 2000
            });
        }
    });
});

// -----------------------------
// call-to section
// Chrome Fix Repair
// Remove fixed background-attachment
// ----------------------------
$(function () {
    var mozilla = /firefox/.test(navigator.userAgent.toLowerCase());
    if (mozilla == false) {
        $(".call-to").css({"background-attachment":"scroll"});
    }
});


// -----------------------------
// Recent Post
// -----------------------------
$(document).ready(function() { 

    (function ($) { 
        $('.sidebar-post-tab ul.sidebar-post-tabs').addClass('active').find('> li:eq(0)').addClass('current');
        
        $('.sidebar-post-tab ul.sidebar-post-tabs li a').click(function (g) { 
            var tab = $(this).closest('.sidebar-post-tab'), 
                index = $(this).closest('li').index();
            
            tab.find('ul.sidebar-post-tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            
            tab.find('.sidebar-post-tab_content').find('div.sidebar-post-tabs_item').not('div.sidebar-post-tabs_item:eq(' + index + ')').slideUp();
            tab.find('.sidebar-post-tab_content').find('div.sidebar-post-tabs_item:eq(' + index + ')').slideDown();
            
            g.preventDefault();
        } );
    })(jQuery);

    

      

});
// -----------------------------
// Portfolio
// -----------------------------
$(window).load(function() {
    var $container = $('#Portfolio');

      $container.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });

      $('#filters').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({ filter: filterValue });
      });
});

