// let x = document.querySelector("h1");
// // console.log(x);

// setTimeout(() => {
//     x.style.color = "red";
//     x.style.fontFamily = "Gill Sans";    
// }, 4000);
// let y = document.querySelector("h2");
// y.style.backgroundColor = "red";
// y.style.color = "wheat";
// setTimeout(() => {
//     y.innerHTML = "BOOM BOOM"
// }, 2000);


let x = document.getElementById("poke1");
let y = document.getElementById("poke2");
let z = document.getElementById("poke3");


x.addEventListener("mouseout",function(){
    x.style.color="white";
    x.style.backgroundColor="white";
})
x.addEventListener("mouseenter",function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
})
y.addEventListener("mousemove",function(){
    y.style.color = "white";
    y.style.backgroundColor = "orange";
})
z.addEventListener("click",function(){
    y.style.backgroundColor="violet";
})