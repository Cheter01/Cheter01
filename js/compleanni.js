
// var value=20;
var person = [
{nome:"Edison", cognome:"Dantas", giorno_su_anno:25, giorno_su_mese:25, mese:"Gennaio", anno:2001, email:"edison.25012001@gmail.com", sesso: "Maschio"},
{nome:"Lorenzo", cognome:"Chesi", giorno_su_anno:57, giorno_su_mese:26, mese:"Febbraio", anno:2001, email:"lorenzo.chesi@live.it", sesso: "Maschio"},
{nome:"Francesco", cognome:"Del Mondo", giorno_su_anno:138, giorno_su_mese:18, mese:"Maggio", anno:2001, email:"Francethebest2001@gmail.com", sesso: "Maschio"},
{nome:"Chiara", cognome:"Di Cesare", giorno_su_anno:166, giorno_su_mese:15, mese:"Giugno", anno:2001, email:"chiaradicesare001@gmail.com", sesso: "Femmina"},
{nome:"Francesco", cognome:"Frassi", giorno_su_anno:172, giorno_su_mese:21, mese:"Giugno", anno:2001, email:"Skynetfrafra.FF@gmail.com", sesso: "Maschio"},
{nome:"Paolo", cognome:"Lucchesi", giorno_su_anno:256, giorno_su_mese:13, mese:"Settembre", anno:2001, email:"lucchesipaolo22@yahoo.it", sesso: "Maschio"},
{nome:"Sara", cognome:"Papaleo", giorno_su_anno:281, giorno_su_mese:8, mese:"Ottobre", anno:2001, email:"saraffaele@alice.it", sesso: "Femmina"},
{nome:"Laura", cognome:"Genua", giorno_su_anno:313, giorno_su_mese:8, mese:"Novembre", anno:2001, email:"lauragenua01@gmail.com", sesso: "Femmina"},
{nome:"Francesco", cognome:"Mottola", giorno_su_anno:320, giorno_su_mese:15, mese:"Novembre", anno:2001, email:"", sesso: "Maschio", sesso: "Femmina"},
{nome:"Martina", cognome:"Gnudi", giorno_su_anno:320, giorno_su_mese:15, mese:"Novembre", anno:2000, email:"giulia_gnudi91@hotmail.it", sesso: "Femmina"},
{nome:"Dennis", cognome:"Bonaguidi", giorno_su_anno:337, giorno_su_mese:3, mese:"Dicembre", anno:2001, email:"dennis.bonaguidi@gmail.com", sesso: "Maschio"},
{nome:"Leonardo", cognome:"Prosperi", giorno_su_anno:347, giorno_su_mese:13, mese:"Dicembre", anno:2001, email:"", sesso: "Maschio", sesso: "Femmina"}];


var value = 0;
var skip = 0;
function compleanni(){




	var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start; //tempo dall'inizio dell'anno ad ora (in millisecondi)
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay); //Conversione dei millisecondi in giorni
            var numero_persone = person.length; //numero persone
						var min = 365;
						var recente;
						var giorni;


            for(var i=0; i<numero_persone; i++){

            		compl = person[i].giorno_su_anno;

            		if (day > compl) {
            			giorni = (365 - day) + compl;
            		} else {
            			giorni = compl - day;
            		}

								if(min > giorni){
									min = giorni;
									recente_mid = i;
								}

            }

							recente = (Math.abs( recente_mid + skip)) % person.length;

							if (day > person[recente].giorno_su_anno) {
								val = ((day - person[recente].giorno_su_anno) / 365) * 100;
								min = (365 - day) + person[recente].giorno_su_anno;
								var anni = new Date().getFullYear() - person[recente].anno; //calcolo anni
							} else {
								val = ((day + 365 - person[recente].giorno_su_anno) / 365) * 100;
								min = person[recente].giorno_su_anno - day;
								var anni = new Date().getFullYear() - person[recente].anno - 1; //calcolo anni
							}

							document.getElementById("name").innerHTML = person[recente].nome + " " + person[recente].cognome;
							document.getElementById("date").innerHTML = person[recente].giorno_su_mese + " " + String(person[recente].mese) + " " + String(person[recente].anno);
							document.getElementById("sesso").innerHTML = person[recente].sesso;
							document.getElementById("email").innerHTML = person[recente].email;
							document.getElementById("anni").innerHTML = anni;
            	document.getElementById("img-compl").style.backgroundImage = "url(images/Classe/"+person[recente].nome+"_"+person[recente].cognome.replace(" ","_")+".jpg";
            	document.getElementById("giorni").innerHTML = min + " giorni rimanenti";

							// DEBUG
							document.getElementById("name-deb").innerHTML = person[recente].nome + " " + person[recente].cognome;
							document.getElementById("date-deb").innerHTML = person[recente].giorno_su_mese + " " + String(person[recente].mese) + " " + String(person[recente].anno);
							document.getElementById("sesso-deb").innerHTML = person[recente].sesso;
							document.getElementById("email-deb").innerHTML = person[recente].email;
							document.getElementById("anni-deb").innerHTML = anni;
							document.getElementById("FAB-perc-deb").innerHTML = min;
							document.getElementById("numero_persone").innerHTML = numero_persone;
							document.getElementById("compl1").innerHTML = compl;
							document.getElementById("other").innerHTML = recente;


							t = document.querySelector('#p1');
							t.MaterialProgress.setProgress(val);
            // }
        };

				function navigate_before(){
					skip--;
					compleanni();
					// console.log(skip);
				};

				function navigate_next(){
					skip++;
					compleanni();
				}
