let div = document.querySelector('.towndata');
let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let townData = request.response;
    let townArray = townData['towns'];

    for (let i = 0; i < townArray.length; i++) {
        if (townArray[i].name == 'Fish Haven' || townArray[i].name == 'Preston' || townArray[i].name == 'Soda Springs') {
            //name the variables
            let section = document.createElement('section');
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            let para4 = document.createElement('p');
            let image = document.createElement("IMG");

            //Create the spot for the info
            h3.textContent = townArray[i].name;
            para1.textContent = townArray[i].motto;
            para2.textContent = "Year Founded:  " + townArray[i].yearFounded;
            para3.textContent = "Population:  " + townArray[i].currentPopulation;
            para4.textContent = "Average Rainfall:  " + townArray[i].averageRainfall + " inches";

            //Give names for CSS
            section.setAttribute("class", "towninfo");
            h3.setAttribute("class", "townh3");
            para1.setAttribute("class", "townp1");
            para2.setAttribute("class", "townp");
            para3.setAttribute("class", "townp");
            para4.setAttribute("class", "townp");
            image.setAttribute("class", "townimg");

            //Images to use based on town
            if (townArray[i].name == 'Fish Haven') {
                image.setAttribute("src", "images/fishHaven.jpg");
                image.setAttribute("alt", "photo of Mountains and Valley");
            } else if (townArray[i].name == 'Preston') {
                image.setAttribute("src", "images/preston.jpg");
                image.setAttribute("alt", "Photo of Preston");
            } else if (townArray[i].name == 'Soda Springs') {
                image.setAttribute("src", "images/sodaSprings.jpg");
                image.setAttribute("alt", "Photo of Soda Springs");
            }
            //add info to HTML
            article.appendChild(h3);
            article.appendChild(para1);
            article.appendChild(para2);
            article.appendChild(para3);
            article.appendChild(para4);
            section.appendChild(article);
            section.appendChild(image);
            div.appendChild(section);
        }
    }

}