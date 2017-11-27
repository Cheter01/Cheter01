function Lorenzo_Chesi() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Lorenzo_Chesi").value;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + parseInt(compl);
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Lorenzo Chesi";
        document.getElementById("compleanno").innerHTML = "26 Febbraio";
        document.getElementById("myimg").src = "images/Classe/Lorenzo_Chesi.jpg";
       
        return false;
    };

function Simone_Palai() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Simone_Palai").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Simone Palai";
        document.getElementById("compleanno").innerHTML = "14 Gennaio";
        document.getElementById("myimg").src = "images/Classe/Simone_Palai.jpg";
       
        return false;
    };

function Edison_Dantas() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Edison_Dantas").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Edison Dantas";
        document.getElementById("compleanno").innerHTML = "25 Gennaio";
        document.getElementById("myimg").src = "images/Classe/Edison_Dantas.jpg";
       
        return false;
    };

function Samuele_Varriale() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Samuele_Varriale").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Samuele Varriale";
        document.getElementById("compleanno").innerHTML = "30 Gennaio";
        document.getElementById("myimg").src = "images/Classe/Samuele_Varriale.jpg";
       
        return false;
    };

function Francesco_Del_Mondo() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Francesco_Del_Mondo").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Francesco Del Mondo";
        document.getElementById("compleanno").innerHTML = "18 Maggio";
        document.getElementById("myimg").src = "images/Classe/Francesco_Del_Mondo.jpg";
       
        return false;
    };

function Chiara_Di_Cesare() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Chiara_Di_Cesare").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Chiara Di Cesare";
        document.getElementById("compleanno").innerHTML = "15 Giugno";
        document.getElementById("myimg").src = "images/Classe/Chiara_Di_Cesare.jpg";
       
        return false;
    };

function Francesco_Frassi() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Francesco_Frassi").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Francesco Frassi";
        document.getElementById("compleanno").innerHTML = "21 Giugno";
        document.getElementById("myimg").src = "images/Classe/Francesco_Frassi.jpg";
       
        return false;
    };

function Sara_Fiorentini() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Sara_Fiorentini").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Sara Fiorentini";
        document.getElementById("compleanno").innerHTML = "23 Agosto";
        document.getElementById("myimg").src = "images/Classe/Sara_Fiorentini.jpg";
       
        return false;
    };

function Paolo_Lucchesi() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Paolo_Lucchesi").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Paolo Lucchesi";
        document.getElementById("compleanno").innerHTML = "13 Settembre";
        document.getElementById("myimg").src = "images/Classe/Paolo_Lucchesi.jpg";
       
        return false;
    };

function Sara_Papaleo() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Sara_Papaleo").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Sara Papaleo";
        document.getElementById("compleanno").innerHTML = "8 Ottobre";
        document.getElementById("myimg").src = "images/Classe/Sara_Papaleo.jpg";
       
        return false;
    };

function Lura_Genua() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Lura_Genua").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Laura Genua";
        document.getElementById("compleanno").innerHTML = "8 Novembre";
        document.getElementById("myimg").src = "images/Classe/Lura_Genua.jpg";
       
        return false;
    };

function Martina_Gnudi() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Martina_Gnudi").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Martina Gnudi";
        document.getElementById("compleanno").innerHTML = "15 Novembre";
        document.getElementById("myimg").src = "images/Classe/Martina_Gnudi.jpg";
       
        return false;
    };

function Dennis_Bonaguidi() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Dennis_Bonaguidi").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Dennis Bonaguidi";
        document.getElementById("compleanno").innerHTML = "3 Dicembre";
        document.getElementById("myimg").src = "images/Classe/Dennis_Bonaguidi.jpg";
       
        return false;
    };

function Leonardo_Prosperi() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Leonardo_Prosperi").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Leonardo Prosperi";
        document.getElementById("compleanno").innerHTML = "13 Dicembre";
        document.getElementById("myimg").src = "images/Classe/Leonardo_Prosperi.jpg";
       
        return false;
    };

function Samy_Abd_Al_Amer() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Samy_Abd_Al_Amer").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Samy Abd Al Amer";
        document.getElementById("compleanno").innerHTML = "18 Dicembre";
        document.getElementById("myimg").src = "images/Classe/Samy_Abd_Al_Amer.jpg";
       
        return false;
    };

function Francesco_Mottola() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compl = document.getElementById("bt_Francesco_Mottola").value|0;
            
            if (day > compl) {
              var value = ((day - compl) / 365) * 100;            
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        document.getElementById("Titolo").innerHTML = "Francesco Mottola";
        document.getElementById("compleanno").innerHTML = " 15 Novembre";
        document.getElementById("myimg").src = "images/Classe/Francesco_Mottola.jpg";
       
        return false;
    };

