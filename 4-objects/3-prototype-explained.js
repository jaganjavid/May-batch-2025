
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.getFullName=function(){
    //   return this.firstName + "x" + this.lastName;
    // }
}

const javid = new Person("Jagan", "Javid");
const arun = new Person("Arun", "Kumar");

Person.prototype.getFullName=function(){
    return this.firstName + "y" + this.lastName;
};

// javid.__proto__.__proto__.getFullName=function(){
//     return this.firstName + "Z" + this.lastName;
// };

console.log(javid);

console.log(javid.getFullName());


const x = {};

console.log(x);
