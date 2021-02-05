// Smooth 'back-to-top' footer link
$(document).ready(function(){
  $('#scroll-up').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
  });
});

// Legal page dropdown
$(document).ready(function(){
    $('.section-title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.drop-down').toggleClass('showing');
    });
  });

// Configura page scroll transitions
function beaktorAnimateBack(animated){
  if ( animated.length > 0 ){
    animated.removeClass('animate');
  }
}

if ( $('body').is('#config') ){ // Load jQuery animation only @ /configura.html
  $(window).scroll(function(){
    var $scrollDown = window.scrollY;
    // cotas animation
    var animatable = $('.will-animate');
    if ( $scrollDown > 50){
      animatable.addClass('trigger-animation');
    }
    // table models animation - responsive trigger
    var $deviceWidth = $(window).width();
    var animatables = $('.to-animate');
    var animated = $('.animate');
      // tablet-lanscape up
      if ( $deviceWidth > 992 ){
        if ( $scrollDown > 1200){
          animatables.addClass('animate');
        } else { beaktorAnimateBack(animated) }

      // tablet-portrait to tablet-landscape  
      } else if ( $deviceWidth < 991.98 && $deviceWidth >= 768 ){
        if ( $scrollDown > 845 ){
          animatables.addClass('animate');
        } else { beaktorAnimateBack(animated) }

      // tablet-portrait to phone-landscape  
      } else if ( $deviceWidth < 767.98 && $deviceWidth >= 576 ){
        if ( $scrollDown > 715 ){
          animatables.addClass('animate');
        } else { beaktorAnimateBack(animated) }

      // phone only  
      } else if ( $deviceWidth < 575.98 ){
        if ( $scrollDown > 600 ){
          animatables.addClass('animate');
        } else { beaktorAnimateBack(animated) }
      }
  });
}

// Initialize tooltip-popovers
$(function () {
  $('.left-popover').popover({
    placement: 'left' 
  });
});

$(function () {
  $('.right-popover').popover({
    placement: 'right' 
  });
});

$(function () {
  if ( $(window).width() < 575.98 ){
    $('.color-popover').popover({
      placement: 'top'
    });
  } else {
    $('.color-popover').popover({
      placement: 'right'
    })
  }
});

// Owl Carousel

// Configura page Owl Carousel options 
var configOwlOptions = {
  loop: true,
  center: true,
  autoplay: true,
  dots: false,
  nav: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0:{
        items: 1,
        autoplayTimeout: 2000
    },
    900:{
        items: 2,
        autoplayTimeout: 1000 
    },
    1400:{
        items: 3,
        autoplayTimeout: 1000
    }
  } 
}

// Blog index page Owl Carousel options 

var blogOwlOptions = {
  items: 1,
  loop: true,
  autoplay: true,
  dots: true,
  nav: true,
  autoplayHoverPause: true
}

$(function(){
    if ( $('body').is('#config') ){ // Trigger carousel only @ /configura.html
      $(".owl-carousel").owlCarousel(configOwlOptions);
  } else if ( $('body').is('#blog-index') ){ // Trigger carousel only @ /blog.html
      $(".owl-carousel").owlCarousel(blogOwlOptions);
    
  }
});
