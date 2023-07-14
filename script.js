let hours= document.getElementById("hr");
let mins= document.getElementById("min");
let secs= document.getElementById("sec");

setInterval(() => {
    let currentTime= new Date();
    hours.innerHTML= (currentTime.getHours()<10?"0":"")+currentTime.getHours();
    mins.innerHTML= (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    secs.innerHTML= (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

    let currentDate = currentTime.toDateString();
    date.innerHTML = currentDate;
}, 1000);
