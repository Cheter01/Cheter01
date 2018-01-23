function sidenav() {
  var nav = document.getElementById("mySidenav");
  var nav_btn = document.getElementById("nav-btn");

  if (nav.style.height === "150px") {
        nav.style.height = "0";
        nav_btn.innerHTML = "OPEN";
      } else {
        nav.style.height = "150px";
        nav_btn.innerHTML = "CLOSE";
      }
}




// function openNav() {
//     document.getElementById("mySidenav").style.height = "200px";
//     // document.getElementById("main").style.marginTop = "350px";
// }
//
// function closeNav() {
//     document.getElementById("mySidenav").style.height = "0";
//     // document.getElementById("main").style.marginTop = "0";
// }
