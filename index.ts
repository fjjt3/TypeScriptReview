// let myName: string = "Bob"; // explicity form
let myName = "Bob";

type Food = string;

let favoriteFood: Food = "pizza";

type Address= {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address

}

let person1: Person = {
    name: 'Luke',
    age: 36,
    isStudent: true,
    address: {
        street: "main 30",
        city: "LA",
        country: "US"
    }
}

let person2: Person = {
    name: 'John',
    age: 36,
    isStudent: false,
    
}

type Pizza = {
    name: string,
    price: number
}

// let margherita: Pizza = {name: "Marguerita", price: 12};

// look for git the menu pizza code

/* const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue) */

// Typing Arrays

// let ages: number[] = [100, 101];
let ages = [100, 101];

let people = [person1, person2];


