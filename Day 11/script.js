const fruits = ["apple", "banana", "mango", "orange"];

console.log("Original array:", fruits);

fruits.push("grapes");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

const sliced = fruits.slice(1, 3);
console.log("Sliced fruits:", sliced);

const joined = fruits.join(" - ");
console.log("Joined string:", joined);
