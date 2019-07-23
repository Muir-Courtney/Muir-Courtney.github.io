var requestURL = "https://muir-courtney.github.io/assignments/templesite/scripts/templedata.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var templeData = request.response;
    templeLasVegas(templeData);
}

function templeLasVegas(jsonObj) {
    var temples = jsonObj['temples']
    var i = 0;
    var name = temples[i].name;

    for (i = 0; i < temples.length; i++) {
        var name = temples[i].name;
        if (name == "Las Vegas") {
            document.getElementById("services").innerHTML = "<li>" + temples[i].services[0] + "</li> <li>" +
                temples[i].services[1] + "</li> <li>" + temples[i].services[2] + "</li> <li>" + temples[i].services[3] + "</li>";

            for (e = 0; e < temples[i].endowment.length; e++) {
                var node = document.createElement("li");
                var textnode = document.createTextNode(temples[i].endowment[e]);
                node.appendChild(textnode);
                document.getElementById("endowment").appendChild(node);
            }
            for (b = 0; b < temples[i].baptism.length; b++) {
                var node = document.createElement("li");
                var textnode = document.createTextNode(temples[i].baptism[b]);
                node.appendChild(textnode);
                document.getElementById("baptism").appendChild(node);
            }
            for (n = 0; n < temples[i].initiatory.length; n++) {
                var node = document.createElement("li");
                var textnode = document.createTextNode(temples[i].initiatory[n]);
                node.appendChild(textnode);
                document.getElementById("initiatory").appendChild(node);
            }
            for (j = 0; j < temples[i].sealing.length; j++) {
                var node = document.createElement("li");
                var textnode = document.createTextNode(temples[i].sealing[j]);
                node.appendChild(textnode);
                document.getElementById("sealing").appendChild(node);
            }

            for (x = 0; x < temples[i].closures.length; x++) {
                var node = document.createElement("li");
                var textnode = document.createTextNode(temples[i].closures[x]);
                node.appendChild(textnode);
                document.getElementById("closures").appendChild(node);
            }
        }

    }
}

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