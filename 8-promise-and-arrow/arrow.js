

// const sayHello = function(){
//     console.log("Hello");
// }

// Arrow function


// const sayHello = () => {
//     console.log("Hello");
// }

// One line function does not need a braces

// const sayHello = () => console.log("Hello");

// One line return

// const sayHello = () => "Hello";
// const sayHello = () => 7;
// const sayHello = () => true;
// const sayHello = () => [true, "123", "Hello"];

// Return Object in a one line
// const sayHello = () => ({msg:"Hello"})

// const sayHello = () => {
//     return 8
// }

// Single params does not need a parentheses

// const sayHello = (firstname = "Guest", lastName = "Welcome") => {
//     return `Hello ${firstname} ${lastName}`
// }

// const sayHello = firstname => `Hello ${firstname}`;
// const sayHello = (firstname, lastName) => `Hello ${firstname} ${lastName}`;

// console.log(sayHello("Jagan", "Javid"));

const users = ["Jagan", "Javid", "Akash"];

// users.forEach(function(user){
//    console.log(user)
// })


// users.forEach(user => console.log(user));

users.forEach((user, index) => console.log(`${user} - ${index}`));
