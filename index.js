let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hours = today.getHours();
let minutes = today.getMinutes();
let ampm;

if (day<10){
    day = "0" + day;
}
if (month<10){
    month = "0" + month;
}
if (hours<12){
    ampm = "AM";
    if(hours<10){
        hours = "0" + hours;
    }
    if (hours==='00'){
        hours = String(12);
    }
}
else{
    ampm = "PM";
    let x = hours % 12;
    hours = String(x);
    if(hours<10){
        hours = "0" + hours;
    }
    if (hours==='00'){
        hours = String(12);
    }
}
if (minutes<10){
    minutes = "0" + minutes;
}

let time = hours + ":" + minutes;

document.getElementById("time-date").innerHTML =
    `
    <h2>${time+ampm}</h2>
    <h4>${month + "/" + day + "/" + year}</h4>
    
    `