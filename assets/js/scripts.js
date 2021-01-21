// Legal page dropdown
$(document).ready(function(){
    $('.section-title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.drop-down').toggleClass('showing');
    });
  });

// Configura page scroll transitions

$(window).scroll(function(){
  // table models animation - responsive trigger
    // tablet-lanscape up
    if ( $(window).width() > 992 ){
      if (window.scrollY > 1000){
        $('#animate-container').addClass('animate');
        $('.beaktor').addClass('animate');
      } else {
        if ( $('#animate-container').hasClass('animate') ){
          $('#animate-container').removeClass('animate');
          $('.beaktor').removeClass('animate');
        }
      }
      
    // tablet-portrait to tablet-landscape  
    } else if ( $(window).width() < 991.98 && $(window).width() > 768 ){
      if ( window.scrollY > 845 ){
        $('#animate-container').addClass('animate');
        $('.beaktor').addClass('animate');
      } else {
        if ( $('#animate-container').hasClass('animate') ){
          $('#animate-container').removeClass('animate');
          $('.beaktor').removeClass('animate');
        }
      }
    // tablet-portrait to phone-landscape  
    } else if ( $(window).width() < 767.98 && $(window).width() > 576 ){
      if ( window.scrollY > 715 ){
        $('#animate-container').addClass('animate');
        $('.beaktor').addClass('animate');
      } else {
        if ( $('#animate-container').hasClass('animate') ){
          $('#animate-container').removeClass('animate');
          $('.beaktor').removeClass('animate');
        }
      }
    } 
  // cotas animation
  if (window.pageYOffset > 250){
    $('#cotas-indicadores').addClass('trigger-animation');
    $('#front-profile').addClass('trigger-animation');
    $('#left-profile').addClass('trigger-animation');
    $('#right-profile').addClass('trigger-animation');
  }
});

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
  if ( $(window).width() < 576 ){
    $('.color-popover').popover({
      placement: 'top'
    });
  } else {
    $('.color-popover').popover({
      placement: 'right'
    })
  }
});

// Configura page BeakArt Owl Carousel

var owlOptions = {
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

$('#config').ready(function(){
  $(".owl-carousel").owlCarousel(owlOptions);
});




