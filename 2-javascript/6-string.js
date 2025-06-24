

const firstName = "Jagan"; 
const lastName = "Javid";


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append

val = "John";
// val = val + " Doe";
val += " Doe";

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change CAse
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Get the index of value
val = firstName[0];
val = firstName[2];

// ChatAt()
val = firstName.charAt(2);

// Slice

const fruit = "Orange";

val = fruit.slice(1,4);

// Split

const tags = "web Dev,App Dev, UI/UX";

val = tags;
val = tags.split("");
val = tags.split(",");
val = tags.split(" ");

const str = "Hello my name is jagan";


// Replace
val = str.replace("jagan", "javid");

// Include
val = str.includes("Hello");
val = str.includes("xyz");

console.log(val);