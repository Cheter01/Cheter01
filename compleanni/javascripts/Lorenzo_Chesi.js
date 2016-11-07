function Lorenzo_Chesi() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            var compleanno = $('#Lorenzo_Chesi').val
            
            if (day > 57) {
              var value = ((day - compleanno) / 365) * 100;            
              var giorni = 365 - day + compleanno;
            } else {
              var value = ((day + 365 - compleanno) / 365) * 100;
              var giorni = compleanno - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
       
        return false;
    };
