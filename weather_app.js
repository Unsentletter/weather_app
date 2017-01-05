
    var parseWeatherData = function(data){
      document.getElementById("data").innerHTML = document.getElementById("data").innerHTML + data;
      document.getElementById("data").innerHTML = (data.main.temp);
      document.getElementById("weather").innerHTML = (data.weather[0].main);
      document.getElementById("location").innerHTML = (data.name);


    };


    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
            parseWeatherData( JSON.parse(xhr.responseText) );
          }
        }

        xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=&units=metric&lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=7c083b7189164b19eb9c3732de020283", false);
        xhr.send(null);

      });



    }
    function IconGen(city) {
    var city = city.toLowerCase()
    switch (city) {
      case 'dizzle':
        addIcon(city)
        break;
      case 'clouds':
        addIcon(city)
        break;
      case 'rain':
        addIcon(city)
        break;
      case 'snow':
        addIcon(city)
        break;
      case 'clear':
        addIcon(city)
        break;
      case 'thunderstom':
        addIcon(city)
        break;
      default:
    $('div.clouds').removeClass('hide');
    console.log('city');
        }
      }


    function addIcon(city) {
      $('div.' + city).removeClass('hide');
    }
