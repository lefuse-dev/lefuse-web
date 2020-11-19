$(document).ready(function () {
let $body = $("body");
let $toggle_menu_button = $(".navTrigger");
let $nav_menu = $(".nav");

// Toggle Mobile Menu
$toggle_menu_button.on("click", function() {
  $nav_menu.toggleClass("activated");
  $body.toggleClass("no-scroll");
  $(this).toggleClass("active");
});

// scripts for slick library
$('.slick-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-container',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

//script for view more card
$('.view-more-card').click(function(event) {
  event.preventDefault();
  let cardID = this.getAttribute('data-target');
  $(cardID).toggleClass('card-overflow');
})		
});


$(document).ready(function(){
  $("#faqsInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#faqsContent .faq-item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});