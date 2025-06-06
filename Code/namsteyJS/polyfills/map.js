Array.prototype.myMap = function (logicFn) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logicFn(this[i], i, this));
    }
    return output;
};

Array.prototype.myfilter = function (logicFn) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        if (logicFn(this[i], i, arr)) {
            output.push(this[i]);
        }
    }
    return output;
};

// arr.reduce((acc, curr, arr)=>{}, initialValue)

Array.prototype.myReduce = function (logicFn, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? logicFn(acc, this[i], i, this) : this[i];
    }
    return acc;
};

// polyfill for call methid

// fn.call(context, ...params)

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this != "function") throw new Error("Not a function");

    context.fn = this;
    context.fn(...args);
};

Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this != "function") throw new Error("Not a function");
    if (!Array.isArray(args)) throw new Error("Not a arrays");
    context.fn = this;
    context.fn(...args);
};

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this != "function") throw new Error("Not a function");
    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    };
};

const arr = [1, 2, 3, 50, 6];
console.log(arr.myMap((num, i, arr) => num * 2));
