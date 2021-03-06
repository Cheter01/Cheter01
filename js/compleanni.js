
// var value=20;
var person = [
{nome:"Edison", cognome:"Dantas", giorno_su_anno:25, giorno_su_mese:25, mese:"Gennaio", anno:2001, email:"edison.dantakov@gmail.com", sesso: "Maschio", telefono: "+39 3473592560"},
{nome:"Paolo", cognome:"D'Angelo", giorno_su_anno:43, giorno_su_mese:12, mese:"Febbraio", anno:2001, email:"???", sesso: "Maschio", telefono: "+39 339 832 2338"},
{nome:"Lorenzo", cognome:"Chesi", giorno_su_anno:57, giorno_su_mese:26, mese:"Febbraio", anno:2001, email:"lorenzo.chesi@live.it", sesso: "Maschio", telefono: "+39 3934811451"},
{nome:"Francesco", cognome:"Del Mondo", giorno_su_anno:138, giorno_su_mese:18, mese:"Maggio", anno:2001, email:"Francethebest2001@gmail.com", sesso: "Maschio", telefono: "+39 3703293530"},
{nome:"Chiara", cognome:"Dicesare", giorno_su_anno:166, giorno_su_mese:15, mese:"Giugno", anno:2001, email:"chiaradicesare001@gmail.com", sesso: "Femmina", telefono: "+39 3485873075"},
{nome:"Francesco", cognome:"Frassi", giorno_su_anno:172, giorno_su_mese:21, mese:"Giugno", anno:2001, email:"Skynetfrafra.FF@gmail.com", sesso: "Maschio", telefono: "+39 3343092264"},
{nome:"Eni", cognome:"Shehu", giorno_su_anno:179, giorno_su_mese:28, mese:"Giugno", anno:2001, email:"enishehu13@gmail.com", sesso: "Maschio", telefono: "+39 3271946285"},
{nome:"Paolo", cognome:"Lucchesi", giorno_su_anno:256, giorno_su_mese:13, mese:"Settembre", anno:2001, email:"lucchesipaolo22@yahoo.it", sesso: "Maschio", telefono: "+39 3348483128"},
{nome:"Sara", cognome:"Papaleo", giorno_su_anno:281, giorno_su_mese:8, mese:"Ottobre", anno:2001, email:"saraffaele@alice.it", sesso: "Femmina", telefono: "+39 3341192842"},
{nome:"Laura", cognome:"Genua", giorno_su_anno:313, giorno_su_mese:8, mese:"Novembre", anno:2001, email:"lauragenua01@gmail.com", sesso: "Femmina", telefono: "+39 3491121929"},
{nome:"Francesco", cognome:"Mottola", giorno_su_anno:320, giorno_su_mese:15, mese:"Novembre", anno:2001, email:"", sesso: "Maschio", sesso: "Maschio", telefono: "+39 3317818363"},
{nome:"Martina", cognome:"Gnudi", giorno_su_anno:320, giorno_su_mese:15, mese:"Novembre", anno:2000, email:"giulia_gnudi91@hotmail.it", sesso: "Femmina", telefono: " +39 3458403606"},
{nome:"Dennis", cognome:"Bonaguidi", giorno_su_anno:337, giorno_su_mese:3, mese:"Dicembre", anno:2001, email:"dennis.bonaguidi@gmail.com", sesso: "Maschio", telefono: "+39 3393332473"},
{nome:"Leonardo", cognome:"Prosperi", giorno_su_anno:347, giorno_su_mese:13, mese:"Dicembre", anno:2001, email:"", sesso: "Maschio", sesso: "Maschio", telefono: "+39 3455753601"}];

var value = 0;
var skip = 0;
var numero_persone = person.length;
var recente;
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start; //tempo dall'inizio dell'anno ad ora (in millisecondi)
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay); //Conversione dei millisecondi in giorni
numero_persone = person.length; //numero persone
var min = 365;
var giorni;


// funzione dei compleanni che calcola solo il compleanno più vicino
function compleanni_onload(){
	
    for (var i = 0; i < numero_persone; i++) {

        compl = person[i].giorno_su_anno;

        if (day > compl) {
            giorni = (365 - day) + compl;
        } else {
            giorni = compl - day;
        }

        if (min > giorni) {
            min = giorni;
            recente_mid = i;
        }

    }

    recente = Math.abs(recente_mid + (999999*person.length-skip)) % person.length;
    compleanni();
}

// funzione dei compleanni che setta nella pagina i cari elementi

function compleanni() {

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
    document.getElementById("telefono").innerHTML = person[recente].telefono;
    document.getElementById("anni").innerHTML = anni;
    document.getElementById("img-compl").style.backgroundImage = "url(images/Classe/" + person[recente].nome + "_" + person[recente].cognome.replace(" ", "_") + ".jpg";
    document.getElementById("giorni").innerHTML = min + " giorni rimanenti";
    t = document.querySelector('#p1');
    t.MaterialProgress.setProgress(val);



}


function navigate_before() {
    skip++;
    compleanni_onload();
};

function navigate_next() {
    skip--;
    compleanni_onload();
}

function tabella() {

    // per la tabella
    var tabella = document.getElementById("tabella_persone");
    var width = document.body.clientWidth;
    var colonne =3;

    if(width <= 420){
        //per lo schermo del telefono, non centra tutta la tabella e ho rimosso l'anno
        document.getElementById('data_di_nascita').style.display = "none";
        colonne=2;
    }else{
        document.getElementById('data_di_nascita').style.display = "block";
    }

    for (var p = 0; p<numero_persone; p++) {

        var row = tabella.insertRow(tabella.rows.length);

        // funzionalità per visualizzare sul form dei compleanni il profilo selezionato
    	row.id =p;	
    	row.onclick = function set_by_table(){
    		recente = this.getAttribute('id');
    		skip = recente - recente_mid;
    		skip = Math.abs(skip);
    		compleanni();
    		dialog.close();   //si trova nel file main.js
    	};

        for (var c = 0; c < colonne; c++) {
            	var cell = row.insertCell(c);
                switch (c) {
                    case 0:
                        cell.innerHTML = person[p].nome;
                        cell.classList.add("mdl-data-table__cell--non-numeric");
                        break;
                    case 1:
                        cell.innerHTML = person[p].cognome;
                        break;
                    case 2:
                        cell.innerHTML = person[p].giorno_su_mese + " " + person[p].mese + " " + person[p].anno;
                        break;
                    default:
                        "ERROR";
                }
            // }
        }
    }

    if(tabella.rows.length>numero_persone+1){
        for (var k = numero_persone; k >= 1; k--){
            //per ricare la tabella, cancellando una possibile tabella precedente
            tabella.deleteRow(k);
        }
    }
};
