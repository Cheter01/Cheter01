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

    // var id = ["overview", "features", "compleanni"];

    var rand = Math.floor(Math.random() * 10);   // returns a random integer from 0 to 9
    var background = "#ffffff url('./images/background/background_"+rand+".svg') no-repeat scroll center";


    // for(var k=0; k<id.length; k++){
        document.body.style.background = background;
        document.body.style.backgroundSize = "cover";
        // console.log(background);
    // }
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
    var valutazione = "like";
    saveToFirebase(valutazione);
  });

  unlike_showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Mi dispiace... 😥'};
    unlike_snackbarContainer.MaterialSnackbar.showSnackbar(data);
    var valutazione = "unlike";
    saveToFirebase(valutazione);
  });

}());


function saveToFirebase(valutazione) {
    var Object = {
        Valutazione: valutazione
    };

    firebase.database().ref('recenzioni').push().set(Object)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}