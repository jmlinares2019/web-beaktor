// Legal page dropdown
$(document).ready(function(){
    $('.section-title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.drop-down').toggleClass('showing');
    });
  });

// Configura page scroll transitions

$(window).scroll(function(){
    if ( $(window).width() > 992 ){ // responsive trigger 
      if ( window.scrollY > 1200 ){
        $('#animate-container').addClass('animate');
        $('.beaktor').addClass('animate');
      }
    } else if ( $(window).width() < 991.98 && $(window).width() > 768 ){
      if ( window.scrollY > 900 ){
        $('#animate-container').addClass('animate');
        $('.beaktor').addClass('animate');
      }
    } else if ( $(window).width() < 767.98 && $(window).width() > 576 ){
      if ( window.scrollY > 750 ){
        $('#animate-container').addClass('animate');
        $('.beaktor').addClass('animate');
      }
    } 

  if (window.pageYOffset > 250){
    $('#cotas-indicadores').addClass('trigger-animation');
    $('#front-profile').addClass('trigger-animation');
    $('#left-profile').addClass('trigger-animation');
    $('#right-profile').addClass('trigger-animation');
  }
});

// Initialize tooltip-popovers

$(function () {
  $('[data-toggle="popover"]').popover()
})
  

// Configura page BeakArt Owl Carousel

var owlOptions = {
  loop: true,
  center: true,
  autoplay: true,
  dots: false,
  nav: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0:{
        items:1
    },
    900:{
        items:2
    },
    1400:{
        items:3
    }
  } 
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(owlOptions);
});


