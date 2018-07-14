
// var value=20;
var person = [
{nome:"Edison", cognome:"Dantas", giorno_su_anno:25, giorno_su_mese:25, mese:"Gennaio", anno:2001, email:"edison.25012001@gmail.com", sesso: "Maschio"},
{nome:"Lorenzo", cognome:"Chesi", giorno_su_anno:57, giorno_su_mese:26, mese:"Febbraio", anno:2001, email:"lorenzo.chesi@live.it", sesso: "Maschio"},
{nome:"Francesco", cognome:"Del Mondo", giorno_su_anno:138, giorno_su_mese:18, mese:"Maggio", anno:2001, email:"Francethebest2001@gmail.com", sesso: "Maschio"},
{nome:"Chiara", cognome:"Di Cesare", giorno_su_anno:166, giorno_su_mese:15, mese:"Giugno", anno:2001, email:"chiaradicesare001@gmail.com"},
{nome:"Francesco", cognome:"Frassi", giorno_su_anno:172, giorno_su_mese:21, mese:"Giugno", anno:2001, email:"Skynetfrafra.FF@gmail.com", sesso: "Maschio"},
{nome:"Paolo", cognome:"Lucchesi", giorno_su_anno:256, giorno_su_mese:13, mese:"Settembre", anno:2001, email:"lucchesipaolo22@yahoo.it", sesso: "Maschio"},
{nome:"Sara", cognome:"Papaleo", giorno_su_anno:281, giorno_su_mese:8, mese:"Ottobre", anno:2001, email:"saraffaele@alice.it"},
{nome:"Laura", cognome:"Genua", giorno_su_anno:313, giorno_su_mese:8, mese:"Novembre", anno:2001, email:"lauragenua01@gmail.com"},
{nome:"Francesco", cognome:"Mottola", giorno_su_anno:320, giorno_su_mese:15, mese:"Novembre", anno:2001, email:"", sesso: "Maschio"},
{nome:"Martina", cognome:"Gnudi", giorno_su_anno:320, giorno_su_mese:15, mese:"Novembre", anno:2000, email:"giulia_gnudi91@hotmail.it"},
{nome:"Dennis", cognome:"Bonaguidi", giorno_su_anno:337, giorno_su_mese:3, mese:"Dicembre", anno:2001, email:"dennis.bonaguidi@gmail.com", sesso: "Maschio"},
{nome:"Leonardo", cognome:"Prosperi", giorno_su_anno:347, giorno_su_mese:13, mese:"Dicembre", anno:2001, email:"", sesso: "Maschio"}];



function myFunction(){




	var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start; //tempo dall'inizio dell'anno ad ora (in millisecondi)
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay); //Conversione dei millisecondi in giorni
            var numero_persone = person.length; //numero persone
						var compl1;
						var compl2;

            // for(i=0; i==numero_persone; i++){

            	do{
								var i=0;

            		compl1 = person[i].giorno_su_anno;
            		compl2 = person[i+1].giorno_su_anno;

            		if (day > compl1) {
            			var value = ((day - compl1) / 365) * 100;
            			var giorni1 = (365 - day) + parseInt(compl1);
            			var giorni2 = (365 - day) + parseInt(compl2);
            		} else {
            			var value = ((day + 365 - compl) / 365) * 100;
            			var giorni1 = compl1 - day;
            			var giorni2 = compl2 - day;
            		}
								i++;
            	}while (giorni1<giorni2);
            // }
            // if (giorni <= 0) {
            //   document.getElementById("compleanno").innerHTML = "Auguri " + nome +", per i tuoi " + anni  + " anni!";
            //   document.getElementById("myimg").src = "images/cake.png";
            //   document.getElementById("label").innerHTML = "🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂";
						//
            // } else {

							var anni = new Date().getFullYear() - person[i].anno; //calcolo anni

							document.getElementById("name").innerHTML = person[i].nome + " " + person[i].cognome;
							document.getElementById("date").innerHTML = person[i].giorno_su_mese + " " + String(person[i].mese) + " " + String(person[i].anno);
							document.getElementById("sesso").innerHTML = person[i].sesso;
							document.getElementById("email").innerHTML = person[i].email;
							document.getElementById("anni").innerHTML = anni;
            	document.getElementById("img-compl").style.backgroundImage = "url(images/Classe/"+person[i].nome+"_"+person[i].cognome+".jpg";
            	document.getElementById("FAB-perc").innerHTML = giorni1;

							// DEBUG
							document.getElementById("name-deb").innerHTML = person[i].nome + " " + person[i].cognome;
							document.getElementById("date-deb").innerHTML = person[i].giorno_su_mese + " " + String(person[i].mese) + " " + String(person[i].anno);
							document.getElementById("sesso-deb").innerHTML = person[i].sesso;
							document.getElementById("email-deb").innerHTML = person[i].email;
							document.getElementById("anni-deb").innerHTML = anni;
							document.getElementById("FAB-perc-deb").innerHTML = giorni1;
							document.getElementById("numero_persone").innerHTML = numero_persone;
							document.getElementById("compl1").innerHTML = compl1;
							document.getElementById("other").innerHTML = i;

            // }
        };

				// document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
				// this.MaterialProgress.setProgress(value);
				// });
