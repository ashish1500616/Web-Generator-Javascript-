/*function getDatcit() {
      var strTemp = $("#searchfield").val();

      console.log(strTemp);
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + strTemp + '&appid=869e6fd2f6e579ae650d308cb7f62cb4', function(str) {
          console.log(str);
                   $("#text2change").html("LOCATION:" + str.name + "</br>" + "Latitude:" + str.coord.lat + "</br>" + "Longitude:" + str.coord.lon + "</br>" + "TEMP:" + (str.main.temp - 273.15) + "</br>" + "</br>" + "MIN TEMP:" + (str.main.temp_min - 273.15) + "</br>" + "MAX TEMP:" + (str.main.temp_max - 273.15) + "</br>" + "PRESSURE:" + str.main.pressure + "</br>");
      });
  }
 $(document).ready(function() {
            

                 

                  function getDatcit() {
                 var strTemp = $("#searchfield").val();

                 console.log(strTemp);
                 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + strTemp + '&appid=869e6fd2f6e579ae650d308cb7f62cb4', function(str) {
                     console.log(str);
                     $("#text2change").html("LOCATION:" + str.name + "</br>" + "Latitude:" + str.coord.lat + "</br>" + "Longitude:" + str.coord.lon + "</br>" + "TEMP:" + (str.main.temp - 273.15) + "</br>" + "</br>" + "MIN TEMP:" + (str.main.temp_min - 273.15) + "</br>" + "MAX TEMP:" + (str.main.temp_max - 273.15) + "</br>" + "PRESSURE:" + str.main.pressure + "</br>");
                 });}


                 $("#searchfield").keydown(function(e) {
                     var x = event.which || event.keyCode;
                     if (x == 13) {
                         getDatcit();

                     }
                 });
                 $("#seabtn").click(function() {
                     getDatcit();

                 });
             });*/

 function getDatcit() {
     var strTemp = $("#searchfield").val();

     console.log(strTemp);
     $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + strTemp + '&appid=869e6fd2f6e579ae650d308cb7f62cb4', function(str) {
         console.log(str);
         /*optional stuff to do after success */
         $("#text2change").html("LOCATION:" + str.name + "</br>" + "Latitude:" + str.coord.lat + "</br>" + "Longitude:" + str.coord.lon + "</br>" + "TEMP:" + (str.main.temp - 273.15) + "</br>" + "</br>" + "MIN TEMP:" + (str.main.temp_min - 273.15) + "</br>" + "MAX TEMP:" + (str.main.temp_max - 273.15) + "</br>" + "PRESSURE:" + str.main.pressure + "</br>");
     });
 }
 $(document).ready(function() {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
             $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=869e6fd2f6e579ae650d308cb7f62cb4', function(str) {
                 /*optional stuff to do after success */
                 $("#text2change").html("LOCATION:" + str.name + "</br>" + "Latitude:" + str.coord.lat + "</br>" + "Longitude:" + str.coord.lon + "</br>" + "TEMP:" + (str.main.temp - 273.15) + "</br>" + "    MIN TEMP:" + (str.main.temp_min - 273.15) + "</br>" + "MAX TEMP:" + (str.main.temp_max - 273.15) + "</br>" + "PRESSURE:" + str.main.pressure + "</br>");

             });
         });
     }


     $("#searchfield").keydown(function(e) {
         var x = event.which || event.keyCode;
         if (x == 13) {
             getDatcit();

         }
     });
     $("#seabtn").click(function() {
         getDatcit();

     });
 });

