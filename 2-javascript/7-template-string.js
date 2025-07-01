

const name = "Javid";
const age = 28;
const job = "Web Dev";
const city = "Chennai";

let html;

// Without template strings

html = "My name is" + " " + name + " " + "im" + " " + age +  " " +
"my job is" + " " + job + " " + "im from" + " " + city;   

// With template strings

html = `My name is ${name} im ${age} my job is ${job} im from ${city}`;

console.log(html);



