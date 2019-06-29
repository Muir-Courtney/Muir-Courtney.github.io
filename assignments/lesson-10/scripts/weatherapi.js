let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=14dbf81157245dbf8ed927ab0d4c2f49';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    let alt = weatherData.weather[0].description;
    let iconadd = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

    document.getElementById("cc-img").setAttribute('src', iconadd);
    document.getElementById("cc-img").setAttribute('alt', alt);
}