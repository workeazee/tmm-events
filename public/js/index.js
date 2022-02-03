$(document).ready(function () {
  $(".tabs").tabs();
  $(".tooltipped").tooltip();

  $(".tooltipped").on("click mouseover", function () {
    $(this).tooltip();
    $(this).tooltip("open");
  });

  $(".tooltipped").mouseleave(function () {
    if ($(this).tooltip()) {
      $(this).tooltip("destroy");
    }
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("nav").addClass("scrolled");
    $("nav").addClass("sticky-nav");
  } else {
    $("nav").removeClass("scrolled");
    $("nav").removeClass("sticky-nav");
  }
});
