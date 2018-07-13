
var value=20;

var person1 = {nome:"Edison", cognome:"Dantas", giorno_su_anno:25, giorno_su_mese:25, mese:"Gennaio", anno:2001, email:"edison.25012001@gmail.com"};
var person2 = {nome:"Lorenzo", cognome:"Chesi", giorno_su_anno:57, giorno_su_mese:26, mese:"Febbraio", anno:2001, email:"lorenzo.chesi@live.it"};
var person3 = {nome:"Francesco", cognome:"Del Mondo", giorno_su_anno:138, giorno_su_mese:18, mese:"Maggio", anno:2001, email:"Francethebest2001@gmail.com"};
var person4 = {nome:"Chiara", cognome:"Di Cesare", giorno_su_anno:166, giorno_su_mese:15, mese:"Giugno", anno:2001, email:"chiaradicesare001@gmail.com"};
var person5 = {nome:"Francesco", cognome:"Frassi", giorno_su_anno:172, giorno_su_mese:21, mese:"Giugno", anno:2001, email:"Skynetfrafra.FF@gmail.com"};
var person6 = {nome:"Paolo", cognome:"Lucchesi", giorno_su_anno:256, giorno_su_mese:13, mese:"Settembre", anno:2001, email:"lucchesipaolo22@yahoo.it"};
var person7 = {nome:"Sara", cognome:"Papaleo", giorno_su_anno:281, giorno_su_mese:8, mese:"Ottobre", anno:2001, email:"saraffaele@alice.it"};
var person8 = {nome:"Laura", cognome:"Genua", giorno_su_anno:313, giorno_su_mese:8, mese:"Novembre", anno:2001, email:"lauragenua01@gmail.com"};
var person9 = {nome:"Francesco", cognome:"Mottola", giorno_su_anno:320, giorno_su_mese:15, mese:"Novembre", anno:2001, email:""};
var person10 = {nome:"Martina", cognome:"Gnudi", giorno_su_anno:320, giorno_su_mese:15, mese:"Novembre", anno:2001, email:"giulia_gnudi91@hotmail.it"};
var person11 = {nome:"Dennis", cognome:"Bonaguidi", giorno_su_anno:337, giorno_su_mese:3, mese:"Dicembre", anno:2001, email:"dennis.bonaguidi@gmail.com"};
var person12 = {nome:"Leonardo", cognome:"Prosperi", giorno_su_anno:347, giorno_su_mese:13, mese:"Dicembre", anno:2001, email:""};
var person = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12];


function myFunction(){




	var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start; //tempo dall'inizio dell'anno ad ora (in millisecondi)
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay); //Conversione dei millisecondi in giorni
            var anni = new Date().getFullYear() - 2001;
            var numero_persone = person.length; //numero persone

            for(i=1; i==numero_persone; i++){

							var num1=i;
							var num2=i+1;
							var persona1 = "persona" + (num1).toString();
							var persona2 = "persona" + (num2).toString();

            	do{
            		var compl1 = parseInt(giorni_da_1_1[i]);
            		var compl2 = parseInt(giorni_da_1_1[i+1]);

            		if (day > compl) {
            			var value = ((day - compl1) / 365) * 100;
            			var giorni1 = (365 - day) + parseInt(compl1);
            			var giorni2 = (365 - day) + parseInt(compl2);
            		} else {
            			var value = ((day + 365 - compl) / 365) * 100;
            			var giorni1 = compl1 - day;
            			var giorni2 = compl2 - day;
            		}
            	}while (giorni1<giorni2);
            }
            if (giorni <= 0) {
              document.getElementById("compleanno").innerHTML = "Auguri " + nome +", per i tuoi " + anni  + " anni!";
              document.getElementById("myimg").src = "images/cake.png";
              document.getElementById("label").innerHTML = "🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂";

            } else {
            	document.getElementById("date").innerHTML = giorno[i] + " " + String(mese_str[i]);
							document.getElementById("date").innerHTML = giorno[i] + " " + String(mese_str[i]);
            	document.getElementById("myimg").src = "images/Classe/"+nome[i]+"_"+cognome[i]+".jpg";
            	document.getElementById("FAB-perc").innerHTML = giorni1 + " Giorni";
								document.getElementById("name").innerHTML = nome[i] + " "+ cognome[i];
            }
        };

				// document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
				// this.MaterialProgress.setProgress(value);
				// });
