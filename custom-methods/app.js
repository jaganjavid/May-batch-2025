


// Custom Array Methods

// Return true if `Value` is an array 

function customIsArray(value){

   return value instanceof Array

}

// console.log(customIsArray([]))

// Custom from 

// - Turn a string or array- like to a true array

// function customFrom(iterable){
//     return Array.prototype.slice()
// }

// At - Get item at the index; negative counts from end

function customAt(array, index){

    let i = index < 0 ? // If index negative
    
    array.length + // count from end
    
    index : index; // otherwise use as - is

    if(i < 0 || i >= array.length){ 
        // return undefined // out-of-bounds return undefined
    }

    return array[i];
    
}

const arr = [1,2,3,4,5];


// console.log(customAt(arr, 6));


// customEntries(array)

// - Return [index, value] pairs as a new array

const fruits = ["Banana", "Orange", "Apple", "Mango"];

function customEntries(array){

    let out = []; // - new array to collect pairs

    for(let i = 0; i < array.length; i++){
        out.push([i, array[i]]) // push a two-item array [index, value]
    }

    return out;

}

// console.log(customEntries(fruits));

// customEvery(array, fn)

// Return true only if fn(item) is true for all item

function customEvery(array, fn){

    for(let i = 0; i < array.length; i++){
        if(!fn(array[i])){ // call fn; if any return false
            return false; // exit early with false
        }
    }

    return true;
}

const nums = [1,5,10,3];

// all number > 0

let allPositive = customEvery(nums, function(n){
    return n > 0;
});

const evens = [2,4,6,8,3];

let allEven = customEvery(evens, function(n){
    return n % 2 === 0;
})

// console.log(allEven);

function customFilter(array, fn){

    let out = []; // collect matching items

    for(let i = 0; i < array.length; i++){
        if(fn(array[i])){ // test each element
            out.push(array[i]) // if true, keep it
        }
    }

    return out;

}

const numbers = [1,2,3,4,5,6,7,8];

let getEvens = customFilter(numbers, function(n){
    return n % 2 === 0;
})

console.log(getEvens);


// Keep only long words

let words = ["Hi","Hello","Hey","Greeting"];

const longWords = customFilter(words, function(word){
    return word.length > 3;
}) 

// customForEach -- call fn(item) for each element

function customForEach(array, fn){
    for(let i = 0; i < array.length; i++){
       fn(array[i], i, array);
    }
}

customForEach(words, function(value, i, array){
    console.log(value, i, array)
})