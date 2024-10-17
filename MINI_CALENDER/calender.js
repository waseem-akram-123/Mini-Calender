const date = document.querySelector ("#date");
const day = document.querySelector ("#day");
const month = document.querySelector ("#month");
const year = document.querySelector ("#year");

let today = new Date();
console.log (today);

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths = ["January","February","March","April","May","June","july","August","September","October","November","December"];

date.innerHtml = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();