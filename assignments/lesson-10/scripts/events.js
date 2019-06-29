let townevents = document.querySelector('.townevents');


const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {

    let responsedata = request.response;
    let cities = responsedata['towns'];
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name == "Preston") {
            let events = cities[i].events;
            let eventcount = 0;

            for (let j = 0; j < events.length; j++) {
                let event = events[eventcount];
                eventcount++;

                let myArticle = document.createElement('article');
                let myparagraph = document.createElement('p');

                myparagraph.textContent = event;
                myArticle.appendChild(myparagraph);
                townevents.appendChild(myArticle);

            }
        }
    }
};