

$(function(){

// Slider1

$('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:2000,
    arrows:true,
   prevArrow: '.left',
    nextArrow:'.right',
    dots:true,
  });

  $('.slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:2000,
    arrows:false,
    fade:true,
 
  });

  $('.slider3-overlay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:2000,
    arrows:false,
   
 
  });

  $('.slider4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:2000,
    arrows:false,
   
 
  });




  





});