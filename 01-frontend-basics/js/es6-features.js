// Arrow Functions

// function add(n1, n2) {
//   return n1 + n2;
// }

// const add = (n1, n2) => n1 + n2;

// const square = (n1) => n1 * n1;

// console.log("Result : ", add(2, 5));

// DESTRUCTURING : "unpacking" the collection

// let user = {
//   email: "john@test.com",
//   age: 32,
// };

// let { email, age } = user;

// console.log("Email : ", email);
// console.log("Age : ", age);

// let friends = ["Monica", "Joe", "Ross", "Rachel"];

// let [f1, f2, f3, f4] = friends;

// console.log(f3); // ?

// REST / SPREAD (...)
// REST creates the collection
// - Always used in parameter list as last argument

// function demoFn(email, ...args) {
//   console.log(args[0]);
// }

// demoFn("john@test", 32, true);

// SPREAD spreads the collection

// let marks = [98, 97, 96];
// let moreMarks = [...marks, 95, 94, 93, 92];

// console.log(moreMarks); // ?

// let userOne = {
//   name: "John Doe",
//   company: "DB",
// };

// let userTwo = {
//   ...userOne,
//   name: "Jenny",
// };

// console.log(userTwo);

// TEMPLATE LITERALS
// " " | ' ' | ` ` (Back tick operator)
// - Variables in strings without (+)
// - Multiline String without (\n)

// let username = "Monica Gellar";
// let age = 23;

// let message = `Hello from ${username}!
// I'm ${age} years old!
// `;

// console.log(message);

// CLASSES
// class Animal {
//   constructor(species, legs) {
//     this.species = species;
//     this.legs = legs;
//   }

//   getDetails() {
//     return `Hello, I belongs to ${this.species} species.
//     I'm having ${this.legs} legs`;
//   }
// }

// let bunny = new Animal("Rabbit", 4);
// console.log(bunny.getDetails());

// let shera = new Animal("Tiger", 4);
// console.log(shera.getDetails());

// DEEFAULT PARAMTER
// - Overriden by supplied value

// function demoFn(arr = []) {
//   return arr.length;
// }

// console.log(demoFn());
// console.log(demoFn([21, 23, 43]));

// ---------------
// PROMISES : placeholder for future value
// - Pending :
// - Settled :
// - Resolved / Success
// - Rejected / Failure

// Promise Producer
// function producerFn() {
//   let promiseObj = new Promise((resolve, reject) => {
//     // Simulate the delayed behaviour
//     setTimeout(() => {
//       // resolve({ message: "Success" });
//       reject(new Error("Something went wrong..."));
//     }, 2000);
//   });

//   return promiseObj;
// }

// Promise Consumer
// - then().catch()
// - Async...await

// async function consumerFn() {
//   try {
//     let response = await producerFn();
//     console.log("Async Response : ", response);
//   } catch (err) {
//     console.error(err);
//   }
// }

// function consumerFn() {
//   producerFn()
//     .then((response) => {
//       console.log("RESPONSE : ", response);
//       return response.message;
//     })
//     .then((result) => console.log("result : ", result))
//     .catch((err) => console.error(err));
// }

// console.log("Promise started");
// consumerFn();
// console.log("Promise ended");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
