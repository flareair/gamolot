$(document).ready(function(){
  $('.bxslider-main').bxSlider({
    controls: false,
    captions: true
  });
  $('.bxslider-item').bxSlider({
    controls: true,
    pager: false
  });
  $('.filter-button').on('click', function() {
    $(this).children('.fa-angle-down').toggleClass('fa-rotate-180');
  });
});