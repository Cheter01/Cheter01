function Lorenzo_Chesi() {
        var bar = $('.progress-bar span');
          
         var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            
            if (day > 57) {
              var value = ((day - 57) / 365) * 100;            
              var giorni = 365 - day + 57;
            } else {
              var value = ((day + 365 - 57) / 365) * 100;
              var giorni = 57 - day;
            }
   
        bar.css('width', value + '%');
        document.getElementById("label").innerHTML = giorni + " Giorni";
       
        return false;
    };
