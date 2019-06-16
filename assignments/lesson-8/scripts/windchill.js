let t = parseFloat(document.getElementById("temp").innerHTML);
let s = parseFloat(document.getElementById("speed").innerHTML);
let w = 35.74 + 0.6215 * t;
let i = w - 35.75 * Math.pow(s, .16);
let n = i + 0.4275 * t * Math.pow(s, .16);
let windchill = Math.round(n * 100) / 100;
document.getElementById("chill").innerHTML = windchill;