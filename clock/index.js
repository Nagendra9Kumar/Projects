const hrs = document.getElementById('hrs');
const mnts = document.getElementById('mnts');
const seconds = document.getElementById('seconds');
// js code for clock with hours and minutes and seconds 

setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    hrs.innerHTML = h;
    mnts.innerHTML = m;
    seconds.innerHTML = s;
}, 100);





