// // // // // // const obj = {
// // // // // //     name: "Alice",
// // // // // //     greet: function () {
// // // // // //         const arrow = () => console.log(this.name);
// // // // // //         arrow();
// // // // // //     },
// // // // // // };
// // // // // // obj.greet();

// // // // // console.log(a);
// // // // // var a = 10;

// // // // // (function () {
// // // // //     console.log(a);
// // // // //     var a = 20;
// // // // // })();

// // // // const a = {};
// // // // const b = { key: "b" };
// // // // const c = { key: "c" };

// // // // a[b] = 123;
// // // // a[c] = 456;

// // // // console.log(a[b]); // ?

// // // console.log([] + []); // ""
// // // console.log([] + {}); // "[object Object]"
// // // console.log({} + []); // 0 (depends on context!)

// // function A() {}
// // A.prototype.value = 10;

// // const a1 = new A();
// // const a2 = new A();

// // a1.value = 20;

// // console.log(a1.value); // 20
// // console.log(a2.value); // 10

// function test() {
//     console.log(a);
//     var a = 1;
//     function a() {}
//     console.log(a);
// }
// test();

const arr = [1, 2, , 4];
console.log(arr.length); // ?
console.log(arr[2]); // ?
console.log(arr.map((x) => x)); // ?
