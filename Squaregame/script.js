let x = document.getElementById("sq1");
x.addEventListener("mouseenter",function(){
    x.style.backgroundColor="red";
    let r = Math.floor(Math.random()*100)
    x.innerHTML=`<h1>${r}</h1>`;
})
x.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
    x.innerHTML="<h1>1</h1>"
})
let color = 0;
let y = document.getElementById("sq2");
y.addEventListener("mouseenter",function(){
    
    if(color){
        y.style.backgroundColor = "red";
    }else{
        y.style.backgroundColor = "green";

    }
    color = 1 - color;
})
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
})