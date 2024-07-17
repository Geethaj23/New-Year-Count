

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const year = document.getElementById('year');
const countdown = document.getElementById('count-down');

const currentyear=new Date().getFullyear();
const nextyear=currentyear+1;

const newYearTime=new Date(`January 01 ${nextyear} 00:00:00`);


function update()
{
    const currentTime=new Date();
    const  diff=newYearTime-currentTime;
    console.log(diff);

    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60)%24;
    const m=Math.floor(diff/1000/60)%60;
    const s=Math.floor(diff/1000)%60;
 
    
    days.innerHTML=d;
    hours.innerHTML=h;
    
    minutes.innerHTML=m;
    
    seconds.innerHTML=s;


}
   
setInterval(update,1000);


