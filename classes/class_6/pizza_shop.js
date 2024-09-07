// Let's make a list (array) of pizzas we want to order
let pizzaOrder = ["Pepperoni", "Cheese", "Hawaiian"];

// Let's see what pizzas we ordered
console.log("Our pizza order:", pizzaOrder);

// Let's add more pizzas to our order
pizzaOrder.push("Meat Lovers");
pizzaOrder.push("Margherita");

console.log("Our updated pizza order:", pizzaOrder);

// Let's check if we ordered a "Supreme" pizza
let isSupremeOrdered = pizzaOrder.includes("Supreme");

console.log("Is Supreme ordered?", isSupremeOrdered);

// Let's deliver the pizzas one by one
for (let i = 0; i < pizzaOrder.length; i++) {
  console.log("Delivering:", pizzaOrder[i]);
}

// We used a for loop to deliver each pizza. The loop starts at index 0 and goes until it's less than the length of the pizza order. Inside the loop, we print the pizza at the current index.
