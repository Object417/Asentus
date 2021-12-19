// Colors
const white = "#fff",
      primaryColor = "#17bed2",
      primaryGrey = "#515769",
      secondaryGrey = "#a6a7aa",
      primaryBgColor = "#fff",
      secondaryBgColor = "#eee",
      primaryGreyBg = "#292c33";

window.onscroll = onScroll;

let prevScroll = window.scrollY;
function onScroll() {
  // Header
  if(window.scrollY > $("#main_header").height() + 100) {
    $("#main_header .nav-menu").css("background-color", white);
    $("#main_header .nav-link").css("color", primaryGrey);
    $("#main_header").css("background-color", white);
    $("h1").css("color", primaryGrey);
  } else {
    $("#main_header .nav-menu").css("background-color", "transparent");
    $("#main_header .nav-link").css("color", white);
    $("#main_header").css("background-color", "transparent");
    $("h1").css("color", white);
  }

  if(window.scrollY > prevScroll
    && window.scrollY > 300) {
    $("#main_header").css({"visibility": "hidden", "opacity": "0"});
  } else {
    $("#main_header").css({"visibility": "visible", "opacity": "1"});
  }
  prevScroll = window.scrollY;
}