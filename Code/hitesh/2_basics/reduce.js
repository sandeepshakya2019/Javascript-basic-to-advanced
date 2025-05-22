const nums = [1, 2, 3, 5, 4, 9, 6, 3, 6, 3, 6, 2, 3, 2, 3];

const sum = nums.reduce((acc, value) => acc + value, 0);
console.log(sum);
