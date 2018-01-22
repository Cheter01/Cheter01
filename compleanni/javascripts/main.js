function seleziona(nome,cognome,giorni_da_1_1,giorno,mese_str) {

 var bar = $('.progress-bar span');

         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = parseInt(giorni_da_1_1);
            var anni = new Date().getFullYear() - 2001;

            if (day > compl) {
              var value = ((day - compl) / 365) * 100;
              var giorni = (365 - day) + parseInt(compl);
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }

            if (giorni <= 0) {
              document.getElementById("compleanno").innerHTML = "Auguri " + nome +", per i tuoi " + anni  + " anni!";
              document.getElementById("myimg").src = "images/cake.png";
              document.getElementById("label").innerHTML = "🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂";

            } else {
              document.getElementById("compleanno").innerHTML = giorno + " " + String(mese_str);
              document.getElementById("myimg").src = "images/Classe/"+nome+"_"+cognome+".jpg";
              document.getElementById("label").innerHTML = giorni + " Giorni";
            }


  bar.css('width', value + '%');
  // document.getElementById("label").innerHTML = giorni + " Giorni";
  document.getElementById("Titolo").innerHTML = nome + " "+ cognome;
  // document.getElementById("compleanno").innerHTML = giorno + " " + String(mese_str);
  // document.getElementById("myimg").src = "images/Classe/"+nome+"_"+cognome+".jpg";

};
