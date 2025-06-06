const arr = [
    { firstName: "John", lastName: "Doe", age: 28 },
    { firstName: "Jane", lastName: "Smith", age: 34 },
    { firstName: "Michael", lastName: "Brown", age: 28 },
    { firstName: "Emily", lastName: "Davis", age: 22 },
    { firstName: "David", lastName: "Wilson", age: 34 },
    { firstName: "Sarah", lastName: "Taylor", age: 27 },
    { firstName: "Daniel", lastName: "Anderson", age: 22 },
    { firstName: "Olivia", lastName: "Thomas", age: 25 },
    { firstName: "James", lastName: "Jackson", age: 34 },
    { firstName: "Sophia", lastName: "White", age: 27 },
];

const ageFilter = arr.reduce((acc, curr) => {
    if (curr.age > 28) acc.push(curr.firstName);
    return acc;
}, []);

console.log(ageFilter);

// const ageFilter = arr
//     .filter((item) => {
//         if (item.age > 28) return true;
//     })
//     .map((item) => item.firstName);

// console.log(ageFilter);

// {28 : 2, 34:2}
// const age = arr.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] += 1;
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});
// console.log(age);
