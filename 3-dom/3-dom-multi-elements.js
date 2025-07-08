
const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION



// items.undefind.color = "blue";

// items[0].style.color = "blue";
// items[1].style.color = "blue";
// items[2].style.color = "blue";


// For Loop

// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue";

//     console.log(items[i]);
// }




// console.log(items);

// let lists = Array.from(items);

// lists.forEach(function(element, index, array){
//     console.log(element, index, array);
// })

// console.log(lists);
// console.log(Array.isArray(lists));

// console.log(Array.isArray(items));

// const arr = [1,2,3];


// console.log(arr);


// function customForEach(array, callback){

//     for(let i = 0; i < array.length; i++){
//         callback(array[i], i, array);
//     }

// }

// Example

// const fruits = ["apple", "banana", "cherry"];

// customForEach(fruits, function(fruit, index, array){
//     console.log(fruit);
//     console.log(index);
//     console.log(array);
// })


const listsItems = document.querySelectorAll(".collection-item"); // Nodelist

console.log(listsItems);
console.log(Array.isArray(listsItems));


listsItems.forEach(function(element, index, array){
    console.log(element, index, array);
})