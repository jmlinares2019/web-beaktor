// Legal page dropdown
$(document).ready(function(){
    $('.section-title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.drop-down').toggleClass('showing');
    });
  });

// BeakArt Owl Carousel

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
