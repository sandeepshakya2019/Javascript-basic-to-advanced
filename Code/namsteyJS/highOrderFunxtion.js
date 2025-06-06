const radius = [3, 1, 2, 4];

function area(radius) {
    return Math.PI * radius * radius;
}

function cir(radius) {
    return Math.PI * 2 * radius;
}

function dia(radius) {
    return 2 * radius;
}

function calcuate(logicFn) {
    return radius.map(logicFn);
}

console.log(calcuate(area));
console.log(calcuate(cir));
console.log(calcuate(dia));
