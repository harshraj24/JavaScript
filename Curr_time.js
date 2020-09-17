let a;
let curr_time;
let clr;

clr= setInterval(() => {
    a = new Date();
    curr_time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById('time').innerHTML=curr_time;

}, 1000);

document.getElementById('stop').addEventListener('click',function(){
    clearInterval(clr)
})