// let x = "Hello JavaScript";

// x = 199;

// x = true;

// x = {};

// x = [98, 97, 96, 95];
// console.log(typeof x);

// -------------
// Objects

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
//   isWorking: false,
//   friends: ["Jenny", "Jack", "James"],
//   address: {
//     city: "Pune",
//     street: "201 Main Road, Pimpri",
//   },
//   addFriend: function (newFriend) {
//     this.friends.push(newFriend);
//   },
// };

// console.log("First Name : ", user.firstName);

// user.addFriend("Jill");

// console.log("Friends : ", user.friends);

// ---------
// ARRAY

// let marks = [98, 95, 92, 89, 90];
// console.log(marks[1]); // ?

// let arr = ["John", true, 32, { name: "John Doe" }, function () {}];
// console.log(arr[3].name);

let marks = [98, 95, 92, 89, 90];
console.log(marks);

// marks.push(99);
// marks.unshift(99);
// marks.pop();
// marks.shift();
// marks.reverse();
// marks.sort();
// marks.fill(88, 1, 3);
// marks.splice(1, 2);

// let newMarks = marks.map(function (value) {
//   return value + 1;
// });

// let evenMarks = marks.filter(function (value) {
//   return value % 2 == 0;
// });

// let splicedMarks = marks.splice(2, 4);
// console.log(splicedMarks);

// let moreMarks = [91, 88];
// let newMarks = marks.concat(moreMarks);
// console.log(newMarks);

// console.log(marks.indexOf(89));
// const position = marks.findIndex(function (value) {
//   return value === 92;
// });
// console.log(position);

const element = marks.find(function (value) {
  return value === 90;
});

console.log(element);
