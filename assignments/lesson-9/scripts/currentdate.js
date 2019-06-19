var now = new Date();

var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

var date = now.getDate();
var year = now.getFullYear();

today = days[now.getDay()] + ", " +
    months[now.getMonth()] + " " +
    date + ", " +
    year;

document.getElementById("date").innerHTML = today;