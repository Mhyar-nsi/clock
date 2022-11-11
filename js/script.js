const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const deg = 6;

setInterval(time , 1000);
function time(){
    const date = new Date;
    const s = date.getSeconds() * deg;
    const m = date.getMinutes() * deg;
    const h = date.getHours() * 30;

    sec.style.transform = `rotateZ(${s}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    hour.style.transform = `rotateZ(${h + (m / 12)}deg)`;
    
    setInterval(time , 1000)
}
