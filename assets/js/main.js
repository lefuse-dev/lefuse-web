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

});
