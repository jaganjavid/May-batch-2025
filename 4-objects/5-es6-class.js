
class Person{

    constructor(firtName, lastName){
        this.firtName = firtName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firtName} ${this.lastName}`;
    }
    
}

class Customer extends Person{
    constructor(firtName, lastName, phone, membership){
        super(firtName, lastName)
        this.phone = phone;
        this.membership = membership;
    }

    customerGreet(){
        return `Hello my customer ${this.firtName} ${this.lastName}`;
    }
}





const javidCutomer = new Customer("Jagan", "Javid", "111-111-1111", "Standard");

console.log(javidCutomer.customerGreet());
console.log(javidCutomer.greeting());