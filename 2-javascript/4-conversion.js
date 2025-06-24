
let val;

// Number to String

val = String(555);
val = String(5 + 5);

// Bool to String

val = String(true);

// Arr to string
val = String([1,2,3,4,5]);

// String to Number
val = Number("5");
val = Number("5" + "5");
val = Number("5 + 5"); // NaN = Not a number

// Boolean to number

val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello");
val = Number([1,2,3]);

val = parseInt("100.35");
val = parseFloat("100.35");

console.log(val);
console.log(typeof val);