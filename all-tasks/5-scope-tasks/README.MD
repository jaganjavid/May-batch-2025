
# 📘 JavaScript Scope Mastery Tasks

🎯 **Focus**: Understanding `var`, `let`, `const`, scope, hoisting, re-declaration, and behavior in blocks/functions/globals.

---

## 🔰 Level 1: Basic Scope (Block vs Function)

> These help understand the **foundations of scope**.

### 🧪 Task 1: `var` inside a function
```js
function greet() {
  var message = "Hello";
  console.log(message);
}
greet();
// Try: console.log(message); // What happens?
```

### 🧪 Task 2: `let` inside a block
```js
{
  let count = 10;
  console.log(count);
}
// Try: console.log(count); // Why error?
```

### 🧪 Task 3: `var` inside if-statement
```js
if (true) {
  var name = "Ali";
}
console.log(name); // What prints?
```

### 🧪 Task 4: `const` inside block
```js
{
  const pi = 3.14;
  console.log(pi);
}
// Try to access `pi` outside — what happens?
```

### 🧪 Task 5: `var` vs `let` global
```js
var a = 1;
let b = 2;

console.log(window.a); // What is this in browser?
console.log(window.b); // Any difference?
```

---

## 🧠 Level 2: Intermediate – Hoisting & Shadowing

> These help build understanding of **how memory is handled**.

### 🧪 Task 6: `var` hoisting surprise
```js
console.log(msg);
var msg = "Hi"; // Why is this undefined, not error?
```

### 🧪 Task 7: `let` hoisting error
```js
console.log(num);
let num = 5; // What error happens here?
```

### 🧪 Task 8: Shadowing `let`
```js
let lang = "JS";
{
  let lang = "Python";
  console.log(lang); // Which one prints?
}
console.log(lang); // Why different?
```

### 🧪 Task 9: Block scoping in loops
```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Try with `var` — what changes?
```

### 🧪 Task 10: Re-declaring variables
```js
var x = 10;
var x = 20; // Allowed?

let y = 10;
let y = 20; // Allowed?
```

---

## 🧠 Level 3: Advanced – Real-World Bugs & Patterns

> Apply knowledge to **prevent real bugs** and write **cleaner code**.

### 🧪 Task 11: IIFE to isolate scope
```js
(function () {
  var secret = "hidden";
  console.log(secret);
})();

// Try accessing secret outside
```

### 🧪 Task 12: Accidental Global with `var`
```js
function test() {
  x = "Oops!";
}
test();
console.log(x); // Why is this global?
```

### 🧪 Task 13: Temporal Dead Zone
```js
{
  // What happens here?
  console.log(typeof z);
  let z = 100;
}
```

### 🧪 Task 14: `const` with mutable object
```js
const user = { name: "John" };
user.name = "Alice"; // Allowed?
user = {}; // Allowed?
```

### 🧪 Task 15: Scope in event listeners
```js
for (var i = 0; i < 3; i++) {
  document.body.addEventListener("click", function () {
    console.log(i); // Click and see
  });
}
// Fix using let
```

---

