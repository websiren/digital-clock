const hourEl= document.getElementById("hour");
const minEl= document.getElementById("minutes");
const secEl= document.getElementById("seconds");
const ampmEL=document.getElementById("ampm");
const dayEl= document.getElementById("day");

function clock(){
    let h= new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm="AM";
    let d= new Date().getDay();
//deciding AM or PM
    if(h>12){
        h-=12;
        ampm="PM"
    }
//to convert number day to string
    if(d==0){
        d="Sunday"
    }
   else  if(d==1){
        d="Monday"
    }
   else  if(d==2){
        d="Tuesday"
    }
   else  if(d==3){
        d="Wednesday"
    }
   else  if(d==4){
        d="Thursday"
    }
    else if(d==5){
        d="Friday"
    }
    else if(d==6){
        d="Saturday"
    }
   //to make the first number 0 if a single digit number 
    if(h<10){
        h= "0"+ h;
    }
    if(m<10){
        m= "0"+ m;
    }
    if(s<10){
        s= "0"+ s;
    }


    hourEl.innerText=h;
    minEl.innerText= m;
    secEl.innerText = s;
    ampmEL.innerText = ampm;
    dayEl.innerText= d;
    setTimeout(()=>{
        clock();
    }, 1000)
}

clock();
