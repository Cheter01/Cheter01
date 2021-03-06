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


// background per il body ---------------------------------------

function background(){
    
    var rand = Math.floor(Math.random() * 10);   // returns a random integer from 0 to 9
    var background = "#ffffff url('./images/background/background_"+rand+".svg') no-repeat scroll center";
    
        document.body.style.background = background;
        document.body.style.backgroundSize = "cover";
        // console.log(background);
}

// snackbar like and unlike -----------------------------------------

(function() {
  'use strict';
  var like_snackbarContainer = document.querySelector('#like_snackbar');
  var like_showToastButton = document.querySelector('#like-show-toast');
  var unlike_snackbarContainer = document.querySelector('#unlike_snackbar');
  var unlike_showToastButton = document.querySelector('#unlike-show-toast');

  like_showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Grazie!! 😄'};
    like_snackbarContainer.MaterialSnackbar.showSnackbar(data);
    var valutazione = "positiva";
    saveToFirebase(valutazione);
  });

  unlike_showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Mi dispiace... 😥'};
    unlike_snackbarContainer.MaterialSnackbar.showSnackbar(data);
    var valutazione = "negativa";
    saveToFirebase(valutazione);
  });

}());


function saveToFirebase(valutazione) {
  var recenzioniFB = firebase.database().ref('recenzioni');
  var userFB = firebase.database().ref('user');
  // var user;

  // getUserIP(function(ip){
  //   var utente = {
  //     utente: ip
  //   };
  //   // var user = userFB.set(utente);
  //   userFB.child('utente').on('value', function (user){
  //     if(user.exists() == ip){                // TODO: dafare

  //     }else{

        if(valutazione != 'null'){
          // if(userFB.on())
          recenzioniFB.child(valutazione).transaction(function(currentValue){return (currentValue||0) + 1})
          .then(function(snapshot) {
                    console.log("success");
                  }, function(error) {
                    // console.log('error' + error);
                  });
          // userFB.set(utente);
        }
  //     }
  //   });
  // })


      recenzioniFB.child('positiva').on('value', function(value)
      {document.getElementById("value_like").innerHTML = (value.val()||0) + " valutazioni ";});

      recenzioniFB.child('negativa').on('value', function(value)
      {document.getElementById("value_dislike").innerHTML = (value.val()||0) + " valutazioni ";});
}

// ip ------------------------------------------------------------

function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

     //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }, noop);

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}


//conversione testo degli spazi in %20 e in %s

var percS = document.querySelector('#percS');
percS.addEventListener('input', function() {

    var percS = document.getElementById("percS");
    var Pperc = document.getElementById("Pperc");
    var txtPercS = percS.value;
    Pperc.innerHTML = txtPercS.replace(/ /g, "%s");
  }
);


