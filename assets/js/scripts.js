// Legal page dropdown
$(document).ready(function(){
    $('.section-title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.drop-down').toggleClass('showing');
    });
  });

// Configura page scroll transitions

$(window).scroll(function(){
  if (window.pageYOffset > 250){
    $('#cotas-indicadores').addClass('trigger-animation');
    $('#front-profile').addClass('trigger-animation');
    $('#left-profile').addClass('trigger-animation');
    $('#right-profile').addClass('trigger-animation');
  }
});

$(window).scroll(function(){
  console.log(window.pageYOffset);
  if (window.pageYOffset > 850){
    $('#animate-container').addClass('animate');
    $('.beaktor').addClass('animate');
  }
});

// Trigger by buttons

function animar(){
  $('#cotas-indicadores').addClass('trigger-animation');
  $('#front-profile').addClass('trigger-animation');
  $('#left-profile').addClass('trigger-animation');
  $('#right-profile').addClass('trigger-animation');
};

function animar2(){
  $('#animate-container').addClass('animate');
  $('.beaktor').addClass('animate');
};

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


