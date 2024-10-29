const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepeperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9},
]

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj){
    menu.push(pizzaObj);
};

function placeOrder(pizzaName){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder ={ pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}