

// Remove element

const list = document.querySelector("li");

// list.remove();

const lists = document.querySelectorAll(".collection li");

// lists.forEach(function(el){
//     el.remove();
// })

// console.log(lists);

// Class && Attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val;

val = link.className; // String
val = link.classList; // DOMTOKENLIST


val.add("stoz");

// val.forEach(function(cls){
//     console.log(cls);
// })

val.remove("test");

val.replace("stoz", "codejavid");

// console.log(val);


const toggleBtn = document.querySelector(".toggle");
const body = document.querySelector("body");

// toggleBtn.addEventListener("click", function(e){
//     body.style.backgroundColor = "green";
// })

// toggleBtn.addEventListener("click", function(e){
//     body.className = "add-color"
// })

// toggleBtn.addEventListener("click", function(e){
//     body.classList.add("add-color");
// })

toggleBtn.addEventListener("click", function(e){
    body.classList.toggle("add-color");
})


