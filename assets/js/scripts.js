// Legal page dropdown
$(document).ready(function(){
    $('.section-title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.drop-down').toggleClass('showing');
    });
  });

// Configura page scroll transitions (temporarily triggered onclick)

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

// Tooltip-modals open @:hover

/* $(document).ready(function(){
  $('.swatch').hover(function(){
    $('#swatchModal').addClass('show');
    $('#swatchModal').css('display', 'block');
  }, function(){
    $('#swatchModal').removeClass('show');
    $('#swatchModal').css('display', 'none');
  });
}); */

// Initialize tooltip-popovers

$(function () {
  $('[data-toggle="popover"]').popover()
})
  

// Configura page BeakArt Owl Carousel

var owlOptions = {
  loop: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0:{
        items:1
    },
    800:{
        items:2
    },
    1200:{
        items:3
    }
  } 
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(owlOptions);
});
