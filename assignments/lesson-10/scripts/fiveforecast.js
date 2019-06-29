let weatherforecast = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=14dbf81157245dbf8ed927ab0d4c2f49';
weatherforecast.open('GET', apiURL, true);
weatherforecast.send();

weatherforecast.onload = function () {
    let forecastData = JSON.parse(weatherforecast.responseText);

    let hightempforecast = [];
    let icon = [];
    let dates = [];
    let day = 1;
    var weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";

    for (let i = 1; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.includes("18:00:00")) {
            hightempforecast[day] = forecastData.list[i].main.temp_max;
            dates[day] = forecastData.list[i].dt_txt;
            icon[day] = forecastData.list[i].weather[0].icon;

            day++;
        }
    }
    for (let i = 1; i <= 5; i++) {
        document.getElementById("forecast" + i).innerHTML = hightempforecast[i].toFixed(2);
        let tempdate = new Date(dates[i]);
        let dayofweek = weekday[tempdate.getDay()];
        document.getElementById("day" + i).innerHTML = dayofweek;

        let pic = icon[i];
        let imgsrc = "https://openweathermap.org/img/w/" + pic + ".png";
        document.getElementById('dayicon' + i).src = imgsrc;
    }
}