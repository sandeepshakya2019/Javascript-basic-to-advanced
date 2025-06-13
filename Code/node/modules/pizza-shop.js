const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
        this.name = "";
        this.orderm = { toppings: [], size: "l", special: false };
        this.total = 0;
    }

    order(orderNumber, name, order, price) {
        this.orderNumber = orderNumber;
        this.name = name;
        this.orderm = order;
        this.total = price;
        this.emit("order", name, order);
    }

    displayOrder() {
        console.log("Your order number is ", this.orderNumber);
        console.log(`${this.name} ordered ${JSON.stringify(this.orderm)}`);
    }
}

module.exports = PizzaShop;
