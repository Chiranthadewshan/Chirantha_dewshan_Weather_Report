function getWeather(){
   var city = document.getElementById("input").value;
   
   if(!city){
    alert("please enter a city");
    return;
   }

   var apiKey = 'a24865e60bf8878a55346388e6caff57';

   var currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}` ;

   var cwRequest = new XMLHttpRequest();
   cwRequest.open('GET',currentWeather,true);

   cwRequest.onreadystatechange= function(){
        if (cwRequest.readyState == 4){
            if(cwRequest.status == 200){

                var data = JSON.parse(cwRequest.responseText);
               diplayWeather(data);
               

            }else{
                alert("Failed to load Weather Data");
            }
        }
    };
   cwRequest.send();

}

function  diplayWeather(data) {
     
     var weatherInfo = document.getElementById('weather-info');

     var cityName  = document.getElementById('city-name');

     var img = document.getElementById('img');

     var temp = document.getElementById('temp');

     var description = document.getElementById('description');

     var humidityElement = document.getElementById('humidity');

     var windElement = document.getElementById('wind');


     if (data.cod == '404') {
        alert(data.message);
     }else{

        var city = data.name;

        var iconCode = data.weather[0].icon;

        var imgIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        var temperature = Math.round(data.main.temp  -273.15);

        var desc = data.weather[0].description;

        var humidity = data.main.humidity;

        var wind = data.wind.speed;


        weatherInfo.style.display = 'block';


        cityName.innerHTML = city;

        img.src = imgIcon;

        temp.innerHTML = temperature+'\u00B0c';

        windElement.innerHTML = wind+("M/s");

        humidityElement.innerHTML = humidity+("%");

        description.innerHTML = desc;
      }
}


