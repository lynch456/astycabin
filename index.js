$(document).ready(() => {
  $("#sub-menu").hide();
  $("#menu").on("click", () => {
    $("#sub-menu").slideToggle("slow");
  });
  $(window).scroll(() => {
    if (window.scrollY > 640) {
      $("#main-visual_video").addClass("fixed-on");
    } else if (window.scrollY < 640) {
      $("#main-visual_video").removeClass("fixed-on");
    }
  });
  $(".tab-title li").click(function () {
    var idx = $(this).index();
    $(".tab-title li").removeClass("on");
    $(".tab-title li").eq(idx).addClass("on");
    $(".tab_cont > div").hide();
    $(".tab_cont > div").eq(idx).show();
  });
  $(".sub-menu li").click(function () {
    var idx = $(this).index();
    $(".sub-menu li").removeClass("on");
    $(".sub-menu li").eq(idx).addClass("on");
    $(".claude-type").removeClass("on");
    $(".claude-type").eq(idx).addClass("on");
  });
  $(".sub-menu2 li").click(function () {
    var idx = $(this).index();
    $(".sub-menu2 li").removeClass("on");
    $(".sub-menu2 li").eq(idx).addClass("on");
    $(".vincent-type").removeClass("on");
    $(".vincent-type").eq(idx).addClass("on");
  });
});
