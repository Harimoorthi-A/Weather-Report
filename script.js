

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

getLocation()


function showPosition(position) {
     
  var lattitude=position.coords.latitude
  var longitude=position.coords.longitude
    
    console.log(position)
    fetch(`https://api.weatherapi.com/v1/current.json?key=dc457e9dadd24a4aa8c115625232806&q=${lattitude},${longitude}`)
    .then(data=>data.json())
    .then(weather=>locationWeather(weather))
}

function locationWeather(weather){
   var pic=weather.current.condition.icon
   var htmlPic=`<img style="width: 50px; height: 50px;" src="${pic}" alt="">`
   locationPic.innerHTML=htmlPic
  
   var temp=weather.current.temp_c
   var htmlTemp=`<h5 class="mt-2">${temp}°C</h5>`
   locationTemp.innerHTML=htmlTemp

   var locStatus=weather.current.condition.text
   var htmlStatus=`<h5 class="mt-2">${locStatus}</h5>`
   locationStatus.innerHTML=htmlStatus

 
}

function searchCity(){
  var cityName=citySearch.value
     
     fetch(`https://api.weatherapi.com/v1/current.json?key=dc457e9dadd24a4aa8c115625232806&q=${cityName}`)
.then(data=>data.json())
.then(weather=>searchWeather(weather))
}

function searchWeather(weather){
  var cityStatus1=weather.current.condition.text
  var htmlStatus=`<h5 class='mt-2'>${cityStatus1}</h5>`
  cityStatus.innerHTML=htmlStatus
  console.log(weather)
    var cityPicWeather=weather.current.condition.icon
    var htmlPicCity= `<img class="mt-3" src="${cityPicWeather}" alt=""></img>`
    cityPic.innerHTML=htmlPicCity

    var placeNme=weather.location.name 
    var htmlPlace=`<h1 class='mt-2'>${placeNme}</h1>`
    cityName.innerHTML=htmlPlace

    var Temperature=weather.current.temp_c
    var Humidity=weather.current.humidity
    var pressure=weather.current.pressure_mb
    
    var htmlLeft=`<i class="fa-solid fa-temperature-three-quarters mt-4"></i><span>Temperatue</span> <br>
      <h4>${Temperature}°C</h4>
      <i class="fa-solid fa-droplet mt-4"></i><span>Humidity</span> <br>
      <h4>${Humidity}</h4>
      <i class="fa-solid fa-temperature-quarter mt-4"></i><span>Pressure</span> <br>
      h4 class="mb-3">${pressure}mb</h4>`
     weatherLeft.innerHTML=htmlLeft

    var wind=weather.current.wind_kph
    var cloud=weather.current.cloud
    var percep=weather.current.precip_mm

   var htmlRight=`<i class="fa-solid fa-wind mt-4"></i> <span>Wind Speed</span> <br>
   <h4>${wind}kph</h4>
   <i class="fa-solid fa-cloud mt-4"></i><span>Cloud</span> <br>
   <h4>${cloud}%</h4>
   <i class="fa-solid fa-snowflake mt-4"></i><span>Precipitation</span>
   <h4 class="mb-3">${percep}mm</h4>`

  weatherRight.innerHTML=htmlRight
   
    
}
 
