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
              var giorni = (365 - day) + compl;
            } else {
              var value = ((day + 365 - compl) / 365) * 100;
              var giorni = compl - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
        //document.getElementById("Titolo").innerHTML = 
       
        return false;
    };
