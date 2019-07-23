let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5506956&units=imperial&APPID=14dbf81157245dbf8ed927ab0d4c2f49';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById("temp").innerHTML = weatherData.main.temp;
    let alt = weatherData.weather[0].description;
    document.getElementById("cc-alt").innerHTML = weatherData.weather[0].description;
    document.getElementById("humid").innerHTML = weatherData.main.humidity;
    document.getElementById("speed").innerHTML = weatherData.wind.speed;

    //Windchill. Not applicable if below 50, and under 3mph

    let t = weatherData.main.temp;
    let s = weatherData.wind.speed;
    if (t <= 50 && s >= 3) {
        let w = 35.74 + 0.6215 * t;
        let i = w - 35.75 * Math.pow(s, .16);
        let n = i + 0.4275 * t * Math.pow(s, .16);
        let windchill = Math.round(n * 100) / 100;
        document.getElementById("chill").innerHTML = windchill;
    } else
        document.getElementById("chill").innerHTML = "N/A";

}