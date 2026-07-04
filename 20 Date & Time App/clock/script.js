


const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");


setInterval(() => {
    const date=new Date();

let hr=date.getHours();
const min=date.getMinutes();
const sec=date.getSeconds();


  
    hr=hr%12||12;
    hours.textContent=String(hr).padStart(2,"0");
    minutes.textContent=String(min).padStart(2,"0");
    seconds.textContent=String(sec).padStart(2,"0");
},1000);
