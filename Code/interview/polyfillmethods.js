// Bind methids

let obj = {
    name: "Sandeep",
    age: 56,
};

function printName() {
    console.log(this.name);
}

let obj1 = {
    name: "Shakya",
    age: 56,
};

// a = printName.bind(obj1);
// a()

Function.prototype.mybind() = function(...args){
    let obj = this
    return function (params) {
        obj.call(args[0], ...args)
    }
}
