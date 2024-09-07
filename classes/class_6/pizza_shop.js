// Let's make a list (array) of pizzas we want to order
let pizzaOrder = ["Margharita", "Pepperoni", "Veggie"];

// Let's see what pizzas we ordered.
console.log("Our pizza order: ", pizzaOrder);

// Let's add more pizzas to our order
pizzaOrder.push("Chicken");

console.log("Our updated pizza order: ", pizzaOrder);

// console.log("Latest pizza that I ordered: ",pizzaOrder.pop());

// Array is of 2 types 
// 1. Stack - Last In First Out (LIFO); Example - Lift and stack of plates
// 2. Queue - First In First Out (FIFO); Example - Line in school.

// Let's check if we have ordered a "Veggie"
let isVeggieOrdered = pizzaOrder.includes("Veggie");

console.log("Is Veggie Ordered? ", isVeggieOrdered);

// To deliver in a Queue
for(let pizzaDelivered=0; pizzaDelivered < pizzaOrder.length; pizzaDelivered=pizzaDelivered+1) {
  console.log("Delivering: ", pizzaOrder[pizzaDelivered]);
}

// To deliver in a Stack
while(pizzaOrder.length > 0) {
  console.log("Delivering using stack: ", pizzaOrder.pop());
}