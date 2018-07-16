// Dialog form
var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('#closing_button').addEventListener('click', function() {
      dialog.close();
    });

    window.onclick = function(event) {
    if (event.target == dialog) {
        dialog.close();
    }
}
// -----------------------------------

// Search navigation filtri della ricerca

var filtro_ricerca=0;
function by_name() {
        filtro_ricerca=0;
    }

    function by_surname() {
       filtro_ricerca=1;
    }
    function by_date() {
        filtro_ricerca=2;
    }

// Search navigation

function search() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("sample6");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabella_persone");
  tr = table.getElementsByTagName("tr");


  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[filtro_ricerca];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}


// background per il body

function background(){

    // var id = ["overview", "features", "compleanni"];

    var rand = Math.floor(Math.random() * 10);   // returns a random integer from 0 to 9
    var background = "#ffffff url('./images/background/background_"+rand+".svg') no-repeat scroll center";


    // for(var k=0; k<id.length; k++){
        document.body.style.background = background;
        document.body.style.backgroundSize = "cover";
        // console.log(background);
    // }
}

// ----------------------------------------------------------orologio---------------------------------------------------------------
/* -- Convert degrees to radians (actually unused here :-) -- */
function deg2rad(d) { return (2 * d / 360) * Math.PI; }
/* -- Progress the clock's hands every once in a while -- */
setInterval(() => {
  let minute = document.getElementById("minute");
  let hour = document.getElementById("hour");
  let second = document.getElementById("second");
  /* -- note retracing by 90 degrees, this is just the way I calculated the hands, the "0" angle is at 3PM, not 12PM, -- */
  let S = new Date().getSeconds() * 6 - 90;
  let M = new Date().getMinutes() * 6 - 90;
  let H = new Date().getHours() * 30 - 90;
  
  second.style.transform = 'rotate(' + S + 'deg)';
  minute.style.transform = 'rotate(' + M + 'deg)';
  hour.style.transform = 'rotate(' + H + 'deg)';
  
}, 10); /* -- update the clock fast enough -- */
/* -- Helps calculate the angle of each hand on the clock -- */
function vec2ang(x, y) {
 angleInRadians = Math.atan2(y, x);
 angleInDegrees = (angleInRadians / Math.PI) * 180.0;
 return angleInDegrees;
}
/* -- Let's calculate position and angle of clock's notches-- */
let nc = document.getElementById("notch-container");
let angle = 0;
let rotate_x = 120;
let rotate_y = 0;
/* -- Calculate the 60 notches for seconds and minutes -- */
for (let i = 0; i < 60; i++) {
  // let thin = document.createElement("div");
  // let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  // let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  // let r = vec2ang(x, y);
  // thin.className = "thin";
  // thin.style.left = 122 + x + "px";
  // thin.style.top = 127 + y + "px";
  // thin.style.transform = "rotate(" + r + "deg)";
  // nc.appendChild(thin);
  // angle +=  (Math.PI / 300) * 10;
}
// reset angle parameters
angle = 0; rotate_x = 120; rotate_y = 0;
/* -- Calculate the thicker notches for hour hand -- */
for (let i = 0; i < 12; i++) {
  // let notch = document.createElement("div");
  // let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  // let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  // let r = vec2ang(x, y);
  // notch.className = "notch";
  // notch.style.left = 122 + x + "px";
  // notch.style.top = 127 + y + "px";
  // notch.style.transform = "rotate(" + r + "deg)";
  // nc.appendChild(notch);
  // angle +=  (Math.PI / 60) * 10;
}
// ------------------------------------------------------------------------------------------------------
