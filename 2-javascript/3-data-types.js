

// Primitive Types

const name = "Jagan";

// console.log(name);
// console.log(typeof name);

const pincode = 12345;

// console.log(pincode);
// console.log(typeof pincode);

// Boolean
const hadDinner = true;

// console.log(hadDinner);
// console.log(typeof hadDinner);

// Null
const box = null;

// console.log(box)
// console.log(typeof box)

// Undefined

let undef;

// console.log(undef);
// console.log(typeof undef);

// Reference Types

const arr = ["Jagan", 123, true];

// console.log(arr);
// console.log(typeof arr);

// Key : value pairs and .

const car = {
    // property
    name:"BMW",
    color:"Black",
    model:"x1",
    year:2024
}

// console.log(car);
// console.log(typeof car);


// Primitive Types

// 1. stored directly in the memory (stack)
// 2. Immutable (can't be changed)
// 3. Copied by value

let a = 10;
let b = a;

// by copies

b = 20;

console.log(a);
console.log(b);

// Reference Types
// Store in heap, variable holds a reference
// Mutable
// Copied By reference

// Object, Array, Function, Date, RegExp, Math

const obj1 = {name:"Jagan"};
const obj2 = obj1; // obj2 points to same memory as obj1

obj2.name = "Javid";



console.log(obj1);
console.log(obj2);

// Stack,
// Heap