

// Block Scope


{
    let x = 10;
}

// console.log(x);


// Function Scope

function testVar(){
    var a = 5;
}

// console.log(a);

// Redeclaration error with let

// var a = 10;
// var a = 20;

// let a = 10;
// let a = 20;

// console.log(a);

// Global Leak with var

// var z = "my top";

// function leakVar(){
//     var z = "leadked";

//     console.log(z);
// }

// leakVar();

// z = "xyz";

// console.log(z);

// const is bloced-scoped and immutable

// const num = 100;

// num = 200;

// console.log(100);

// const x = {
//     a:"a"
// }

// console.log(x);
// x.a="aa";

// console.log(x);

// x = "Hello";

// Shadowing with let

// let x = 5;

// {
//     let x = 10;
//     console.log(x);
// }

// console.log(x);

// Hositing with var vs let

// console.log(a);


// console.log(window);
// var a = "10";


// let b = 20;



// console.log(b)


// const with objects

// const user = {name:"Jagan"};

// user.name = "Codejavid";

// console.log(user);

// user = [];


// let in loops


// for(let i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000) 
// }


// var in loops

// for(var i = 0; i < 3; i++){
//     (function(index){
//         setTimeout(function(){
//             console.log(index);
//         }, 1000) 
//     })(i)
// }

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);


// Advance scope

// IIFE (Immediately Invoked Function Expression) with var 

// var secert = "Not hidden";

// (function(){
  
//     var secert = "hidden 1";
    
//     console.log(secert);

// })()

// console.log(secert);

// Closures + Block Scope

// function outer(){
    
//     let count = 0;
//     return function inner(){
//         return function inner2(){
//             count++;
//             return count;
//         }
//     }
    
// }

// const fn = outer();

// console.log(fn()());
// console.log(fn()());


// const in closure

// function createCounter(){
//     const limit = 3;

//     return function(){
//         console.log("Limit is ", limit);
//     };
// }

// createCounter()();


// Function vs block scope

// function test(){
//     if(true){
//         var x = 5;
//         let y = 10;

//         console.log(y);
//     }

//     console.log(x);
//     console.log(y);

// }

// test();

// Global pollution

// function badPractice(){
//     leaked = 100;
// }

// badPractice();

// console.log(window);

// console.log(leaked);
