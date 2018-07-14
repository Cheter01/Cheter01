// Dialog form
var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    // dialog.querySelector('.close').addEventListener('click', function() {
    //   dialog.close();
    // });

    window.onclick = function(event) {
    if (event.target == dialog) {
        dialog.close();
    }
}
// -----------------------------------

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
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
