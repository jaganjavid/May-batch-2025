

// const obj = {

// }

// ES5

function Person(firstName, lastName){
   this.firstName = firstName;
   this.lastName = lastName;
   this.getThis = function(){
    console.log(this);
   }
}

const jagan = new Person("Jagan", "Javid");
const arun = new Person("arun", "kumar");

// console.log(jagan, arun);

// Context, lexial scope

console.log(this);

function a(){
    console.log(this);
}

a();

const obj = {
    test:"Test",
    runThis:function(){
        console.log(this);
    }
}

obj.runThis();

const c = "cat";

function b(){

    // const c = "carry";

    this.firstName = "BoB";

    console.log(c);
}

b();

console.log(firstName);

