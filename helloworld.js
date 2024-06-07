// let a=16;
// let b=17;
// console.log(`My name is Sumit Awsthi and agi is ${b}`)

// let x = {
//     name:"Raghav",
//     age: 24,
//     percentage:14,
//     ismarrted:23
// };

// for(const key in x){
//     console.log(key,x[key]);
// }

// function product(a,b,c){
//     return a*b*c;
// }

// function fun(x,y){
//     // console.log(x-y);
//     let a =x(2,3,3);
//     console.log(a);
// }

// fun(product,4)

// function h(){
//     console.log("hello");
// }


// function hello(){
//     console.log("hello");
// }

// function mello(){
//     console.log("mello");

// }
// setTimeout(hello,2*1000)
// setTimeout(mello,0.2*1000)



// Printing numbers with atime delay-------------------
// for(let i =1;i<=100;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*100);
// }

// Using Map --------------------------

// function twice(ele){
//     return 2*ele;
// }

// function square(ele){
//     return ele*ele;
// }

// let arr = [2,4,1,13];
// console.log(arr);

// let brr = arr.map((ele)=>{
//     return ele*ele;
// })
// console.log(brr);


// three steps of using diffrent syntaxically map

// 1.
function add10(ele){
    return ele+10;
}
let arr= [2,-1,93,10]
let br = arr.map(add10)
console.log(br)


// 2.

br = arr.map(function(ele){
    return ele*ele;
})

console.log(br)

// 3.

br = arr.map(ele=>ele-ele)
console.log(br);