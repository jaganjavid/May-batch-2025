

const numbers = [2,43,45,23,76,35,78,3,34,98];

let val;

// Get the array length
val = numbers.length;

// Check if it is array
val = Array.isArray(numbers);

// Get the index value
val = numbers[0];
val = numbers[3];

// Get the last index
val = numbers[numbers.length - 1]

// Change into array index value
val = numbers[2] = 100;

// Find the index of value
val = numbers.indexOf(666); // if array match it return the index if not -1

// Mutating array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take off from the end
// numbers.pop();
// numbers.pop();
                                    
// Take off from the front
// numbers.shift();
// numbers.shift();

const fruits = ["Apple", "Orange", "Kiwi"];

// Splice ==> To remove and add

// to remove
// val = fruits.splice(1,2);

// to add
// fruits.splice(2,0,"Mango");


// console.log(fruits);

// Reverse the array

// val = numbers.reverse();

// val = numbers.indexOf(34);

// console.log(val);


function customIndexof(array, value){

    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i
        }
    }

    return -1;

}

const arr = [10, 20, 30, 40, 50];

console.log(arr.length);

console.log(arr[arr.length - 1]);

// console.log(customIndexof(arr, 20));
