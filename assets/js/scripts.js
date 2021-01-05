// Legal page dropdown
$(document).ready(function(){
    $('.section-title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.drop-down').toggleClass('showing');
    });
  });

// Owl Carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});