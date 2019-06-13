$(function() {
  let a = $(".js-header-logo").height();
  let previousScroll = 0;
  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > previousScroll) {
      if ($(".js-header-logo").height() > 30) {
        $(".js-header-logo").css("height", a - currentScroll / 5);
      }
      if ($(".js-header-logo").height() < 30) {
        $(".js-header-logo").css("height", 30);
      }
    } else {
      if ($(".js-header-logo").height() < 86 && currentScroll < 275) {
        $(".js-header-logo").css("height", 30 + (275 - currentScroll) / 4);
      }
      if ($(".js-header-logo").height() > 85) {
        $(".js-header-logo").css("height", 85);
      }
    }
    previousScroll = currentScroll;
  });

  $("#click").click(function() {
    $("#mySidenav").css("width", "340px");
    $("#main").css("margin-left", "340px");
    $(".navbar").css("margin-left", "340px");
  });
  $(".closebtn").click(function() {
    $("#mySidenav").css("width", "0");
    $(".navbar").css("margin-left", "0");
    $("#main").css("margin-left", "0");
  });
});
