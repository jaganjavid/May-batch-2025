
function Person(firstName, lastName){
   this.firstName = firstName;
   this.lastName = lastName;
} 

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`
}

// Full Name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const javid = new Person("Jagan", "Javid");


// Customer Object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}



// Inherit the person prototype methods to customer

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.test = function(){
    console.log("Yes im a test");
}

console.log(Customer.prototype);


const javidCustomer = new Customer("Jagan", "Javid", "111-1111-111", "standard");

javidCustomer.test();





