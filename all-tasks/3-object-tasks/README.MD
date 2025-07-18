# JavaScript Deep Dive: `this`, Constructors, Object Types, and Prototypes

Welcome! This guide includes practical tasks for mastering JavaScript concepts like `this` context, object 
creation using constructors, data types, and the prototype chain.

Each section has 10 tasks — try to solve them on your own, and refer to the comments for hints.

---

## 🟢 Basic Tasks

1. **Create a simple object using `{}` syntax** with two properties and print them.
2. **Use a constructor function** to create a `Person` object with `name` and `age` properties.
3. **Log `this` inside a regular function** and explain what you see in Node vs browser.
4. **Log `this` inside a method** inside an object and observe the output.
5. **Compare primitive and object types**: `String`, `Number`, and `Boolean` (using `typeof`).
6. **Use the `new` keyword** to create an object from a constructor function.
7. **Create a method using the prototype** of the constructor function.
8. **Override a prototype method** and see how it affects different instances.
9. **Create an array using literal and constructor syntax**, and print type and length.
10. **Use `typeof` and `instanceof`** to check data types and constructors.

---

## 🟡 Intermediate Tasks

1. **Create two `Person` objects** and compare their prototype using `Object.getPrototypeOf`.
2. **Use `.call()` and `.apply()`** to invoke a function with different `this` contexts.
3. **Create a constructor with a nested function**, and log `this` inside both.
4. **Use arrow functions** inside constructors and observe how `this` behaves differently.
5. **Simulate inheritance** by chaining constructor functions using `.call(this)`.
6. **Use `__proto__`** to manually change the prototype of an object.
7. **Implement a method on `Object.prototype`** and see how it appears in all objects.
8. **Create a shallow clone** of an object using spread/rest or `Object.assign`.
9. **Compare function creation methods**: declaration, expression, and `new Function`.
10. **Create a utility function** to log prototype chain of any object step by step.

---

## 🔴 Advanced Tasks

1. **Implement a custom `bind` function** that binds `this` to a function.
2. **Polyfill `new` keyword behavior** in a function `customNew(constructor, ...args)`.
3. **Create a class using ES6 syntax** and compare with constructor functions.
4. **Use `Object.create`** to create an object with a given prototype and add methods.
5. **Use a factory function** to generate objects and compare it with constructor approach.
6. **Log the prototype chain** of a complex object (e.g., array or function).
7. **Override `toString()` method** on an object to customize logging.
8. **Detect if an object is created via constructor or not**.
9. **Create a global `logger` function** that logs `this` and also works as a method inside objects.
10. **Simulate class inheritance manually** without using ES6 `class`.

---

## 🧠 Pro Tips

- Use browser console and Node.js to see how `this` behaves differently.
- Always explore the prototype chain with `console.dir()` and `Object.getPrototypeOf()`.
- Understand the difference between instance methods and prototype methods.
