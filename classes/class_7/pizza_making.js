// Create pizza objects

let cheesePizza = {
    name: 'Cheese Pizza',
    price: 8,
    toppings: 'Cheese'
};

let pepperoniPizza = {
    name: 'Pepperoni Pizza',
    price: 10,
    toppings: ['Cheese', 'Pepperoni']
};

let veggiePizza = {
    name: 'Veggie Pizza',
    price: 10,
    toppings: ['Cheese', 'Capsicum', 'Onion', 'Olives', 'Mushroom']
}

let personOne = {
    name: 'Elsa',
    powers: 'Frozen hands',
    favouriteColor: 'blue',
    gender: 'girl',
    height: '5 feet 7 inches'
}

let personTwo = {
    name: 'Olaf',
    powers: 'funny',
    favouriteColor: 'orange',
    gender: 'boy',
    height: '2 feet 6 inches'
}

console.log(personTwo.name);
console.log(personTwo['name']);
console.log(personTwo.powers);

console.log(pepperoniPizza.toppings, pepperoniPizza.price);

console.log(veggiePizza.toppings, veggiePizza.price);
veggiePizza.price = 12;
veggiePizza.toppings.push('Chilli');
console.log(veggiePizza.toppings, veggiePizza.price);

for(let property in personTwo) {
    console.log(property, ' = ', personTwo[property]); //personTwo[name]
}

let pizzaOrder =  {
    customer: personTwo,
    pizzas: [veggiePizza, cheesePizza, pepperoniPizza]
}

let orderTotal = 0;
for(let pizza of pizzaOrder.pizzas) {
    orderTotal = orderTotal + pizza.price;
}
console.log("Order total = ", orderTotal);

let pizzaOrderTwo = {
    customer: personOne,
    pizzas: [veggiePizza, cheesePizza]
}

let orderTwoTotal = 0;
for(let pizza of pizzaOrderTwo.pizzas) {
    orderTwoTotal = orderTwoTotal + pizza.price;
}

console.log("Order 2 total = ", orderTwoTotal);