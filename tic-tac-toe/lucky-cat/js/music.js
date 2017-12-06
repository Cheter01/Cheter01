var vid = document.getElementById("myVideo");
function enableAutoplay() {
    vid.autoplay = true;
    vid.volume = 0.5;
    vid.load();
}
