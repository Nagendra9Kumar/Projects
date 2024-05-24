const hrs = document.getElementById('hrs');
const mnts = document.getElementById('mnts');
const seconds = document.getElementById('seconds');
const format = document.getElementById('format');
const date = document.getElementById('date');
// js code for clock with hours and minutes and seconds 
const days = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
setInterval(() => {
    const now = new Date();
    const h = now.getHours()<=12?now.getHours():now.getHours()-12;
    const m = now.getMinutes()<=9? String(now.getMinutes()).padStart(2,0) : now.getMinutes();
    const s = now.getSeconds()<=9? String(now.getSeconds()).padStart(2,0) : now.getSeconds();
    hrs.innerHTML = h;
    mnts.innerHTML = m;
    seconds.innerHTML = s;
    format.innerHTML = now.getHours()<=12?"AM":"PM";
    date.innerHTML = days[now.getDay()]+","+now.getDate()+" "+months[now.getMonth()];
}, 100);





