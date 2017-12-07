var vid = document.getElementById("myVideo");
var x = document.getElementById("myVideo");

$(".startStop").click(function(event) {
      vid.pause();
  $(".startStop").toggleClass("active");
  if (document.getElementById("startStop").className == "startStop") {
      vid.volume = 0.5;
      vid.play();
    }

  // $("a").toggleClass("play");
});
