
//  (.) object are key and value pairs

const person = {
    // Property
    firstName:"Jagan",
    lastName:"Javid",
    age:28,
    email:"j@email.com",
    hadDinner:false,
    hobbies:["Music", "Games"],
    address:{
        city:"Chennai",
        state:"TN"
    },
    // Method
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}

// console.log(person);

let val;

val = person;

// Get a specify value

val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[0];
val = person.address.city;
val = person.getFullName();

console.log(val); 


// function test(){
    
// }

// const x = {
//     test:function(){

//     }
// }