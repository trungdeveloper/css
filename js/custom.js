$(function() {
  if ($(document).width() > 1199) {
    let a = $(".js-header-logo").height();
    let previousScroll = 0;
    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
      if (currentScroll > previousScroll) {
        if ($(".js-header-logo").height() > 30) {
          $(".js-header-logo").css("height", a - currentScroll / 10);
        }
        if ($(".js-header-logo").height() < 30) {
          $(".js-header-logo").css("height", 30);
        }
      } else {
        if ($(".js-header-logo").height() < 86 && currentScroll < 550) {
          $(".js-header-logo").css("height", 30 + (550 - currentScroll) / 10);
        }
        if ($(".js-header-logo").height() > 85) {
          $(".js-header-logo").css("height", 85);
        }
      }
      previousScroll = currentScroll;
    });
  }
  $(".click").click(function() {
    $("#mySidenav").css("width", "340px");
    $(".navbar").css("margin-left", "340px");
    $("#header").addClass("shift-img");
  });
  $(".closebtn").click(function() {
    $("#mySidenav").css("width", "0");
    $(".navbar").css("margin-left", "0");
    $("#header").removeClass("shift-img");
  });

  $(document).click(function(e) {
    if (
      !$("#mySidenav, .click").is(e.target) &&
      $("#mySidenav, .click").has(e.target).length === 0
    ) {
      $("#mySidenav").css("width", "0");
      $(".navbar").css("margin-left", "0");
      $("#header").removeClass("shift-img");
    }
  });
});
