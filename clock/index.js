const hrs = document.getElementById('hrs');
const mnts = document.getElementById('mnts');
const seconds = document.getElementById('seconds');
const format = document.getElementById('format');
// js code for clock with hours and minutes and seconds 

setInterval(() => {
    const now = new Date();
    const h = now.getHours()<=12?now.getHours():now.getHours()-12;
    const m = now.getMinutes()<=9? String(now.getMinutes()).padStart(2,0) : now.getMinutes();
    const s = now.getSeconds()<=9? String(now.getSeconds()).padStart(2,0) : now.getSeconds();
    hrs.innerHTML = h;
    mnts.innerHTML = m;
    seconds.innerHTML = s;
    format.innerHTML = now.getHours()<=12?"AM":"PM";
}, 100);





