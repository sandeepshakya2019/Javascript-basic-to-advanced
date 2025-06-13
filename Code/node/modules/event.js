// const EventEmitter = require("node:events");
// // returns a class called EventEmitter

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, toping) => {
//     console.log("pizza orders recieved", size, toping);
// });

// emitter.on("order-pizza", (size, toping) => {
//     console.log("Another event responder", size, toping);
// });

// emitter.emit("order-pizza", "large", ["mushroom"]);

const PizzaShop = require("./pizza-shop");
// const EventEmitter = require("node:events");
// // returns a class called EventEmitter

// const emitter = new EventEmitter();

const o1 = new PizzaShop();
// console.log(o1);
o1.on("order", () => {
    console.log("order recieev");
});

o1.order(
    12356,
    "Sandeep",
    {
        toppings: ["veggires", "mussrom"],
        size: "l",
        special: false,
    },
    5656
);

o1.displayOrder();
