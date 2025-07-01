
// Two Phase

// 1 - Creation
// 1 - Excutation

// Function statement - Function declarations

const firstName = "Jagan";

// greet("Jagan","Javid"); // Invoke

function greet(firstName = "John", lastName = "Doe"){

    // Default value

    // if(typeof firstName === "undefined"){
    //     firstName = "John";
    // }

    // if(typeof lastName === "undefined"){
    //     lastName = "Doe";
    // }

    // Function Body
    console.log(`Hello ${firstName} ${lastName}`);
}

// greet(); // Invoke

// Function Expression

// const add = function(x = 5){
//     console.log(x + 5);
// }

// add();
// add(10);

// An IIFE ( Immediately Invoked Function Expression )

(function(){
    console.log("Hello");
})()
