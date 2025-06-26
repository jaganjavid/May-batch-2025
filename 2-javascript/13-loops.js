

// For loops

// for(let i = 0; i <= 5; i++){
//     console.log(i);
// }

const names = ["Jagan", "Akash", "Aurn"];


// console.log(names.length);

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// while loop

// let i = 0;

// while(i < 5){
//     console.log(i);
//     i++;
// };

// do... white loop

// let i = 0;

// do{
//     console.log(i);
//     i++;
// } while(i < 5);

// For ... of loop (used to iterate over array, strings, etc...)

// const fruits = ["apple", "orange", "mango"];

// for(const fruit of fruits){
//     console.log(fruit);
// }

// For ... in (used to iterate over object keys)

const user = {name:"Jagan", age:28};

for(const key in user){
    console.log(`${key} : ${user[key]}`);
}

// Break and continue

for(let i = 0; i < 5; i++){
    if(i === 2) continue;
    if(i === 4) break;

    console.log(i);
}