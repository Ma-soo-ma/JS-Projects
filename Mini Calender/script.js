let date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");


let today = new Date();

date. innerHTML =(today.getDate()<10?"0" : "") + today.getDate();
let days =["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"]
day.innerHTML = days[today.getDay()]

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

month.innerHTML = months[today.getMonth()];

year.innerHTML = today.getFullYear();