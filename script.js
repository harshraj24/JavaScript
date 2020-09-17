// var a=10;
// if(a%2==0){
//     console.log("Even");
// }
// else{
//     console.log("odd");
// }

// for(var i=1;i>0;i++){
//     if(i==5){
//         continue;
//     }
//     if(i==12){
//         break;
//     }
//     console.log(i);
// }

// var arr = ["Harsh", "Abhi", "Bharati"];
// // console.log(arr.sort())

// let d = arr.pop();
// console.log(d)

let elem = document.getElementsByClassName("container");
console.log(elem);
elem[0].style.background="violet";
elem[1].classList.add('bg-primary');
elem[1].classList.add('text-white');

elem[0].addEventListener('mouseover',function(){
    console.log("Hovered on Container 1");
})
document.getElementById('click').addEventListener('mouseover',function(){
    console.log("Hovered on the button");
})
