let emptyArray = []; // Creates an empty array

let myNumbers = [1, 2, 3, 4, 5]; // Creates an array of numbers
let fruits = ["apple", "banana", "orange"]; // Creates an array of strings

let mixedArray = [10, "Hello", true, { name: "Alice" }];

let colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: "red"
console.log(colors[2]); // Output: "blue"

console.log(colors[-1]); // Output: "blue"

colors[1] = "yellow";
console.log(colors); // Output: ["red", "yellow", "blue"]

let animals = [];
animals.push("cat", "dog", "bird");
console.log(animals); // Output: ["cat", "dog", "bird"]

animals.unshift("fish");
console.log(animals); // Output: ["fish", "cat", "dog", "bird"]

let myNumbers2 = [];
for (let i = 0; i < 5; i++) {
  myNumbers2.push(i);
}
console.log(myNumbers2); // Output: [0, 1, 2, 3, 4]

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

animals.forEach(function (animal) {
  console.log(animal);
});

let lastElement = animals[animals.length - 1];
console.log(lastElement); // Output: "bird"

if (animals.includes("rabbit")) {
  console.log("Rabbit is in the array.");
} else {
  console.log("Rabbit is not in the array.");
}

let slicedArray = animals.slice(1, 3); // Creates a new array from index 1 to 2 (exclusive)
console.log(slicedArray); // Output: ["cat", "dog"]
