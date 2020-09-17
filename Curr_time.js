let a;
let curr_time;
let clr;
let dt;

clr= setInterval(() => {
    a = new Date();
    dt=a.toLocaleDateString();
    curr_time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + " on " + dt;
    document.getElementById('time').innerHTML=curr_time;
    

}, 1000);

document.getElementById('stop').addEventListener('click',function(){
    clearInterval(clr)
})

document.getElementById('start').addEventListener('click',function(){
    clr= setInterval(() => {
        a = new Date();
        curr_time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + " on " + dt;
        document.getElementById('time').innerHTML=curr_time;
    
    }, 1000);
})