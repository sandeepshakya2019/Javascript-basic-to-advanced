// // function createIterator(arr) {
// //     let i = 0;
// //     return {
// //         next: function () {
// //             if (i < arr.length) return { val: arr[i++] };
// //             else return { done: true };
// //         },
// //     };
// // }

// // const it = createIterator(["sandeep", "vishal"]);
// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());
// console.log(a);
// var a = function (params) {};

arr = [1, 2, 3, 4, 5, 6, 7, 9, 8, 9, 10];

const ar = arr.filter((item, index) => {
    if (item % 2 == 0) return index;
    else return false;
});

console.log(ar);
