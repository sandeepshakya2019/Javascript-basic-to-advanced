// // // arr = [1, 2, 3, 4, 5, 6];

// // // console.log(
// // //     arr.map((item, index, arr) => {
// // //         return item * 2;
// // //     })
// // // );

// // // Array.prototype.myMap = function (logic) {
// // //     const output = [];
// // //     for (let i = 0; i < this.length; i++) {
// // //         const ans = logic(this[i], i, this);
// // //         output.push(ans);
// // //     }
// // //     return output;
// // // };

// // // console.log(
// // //     arr.myMap((item) => {
// // //         return item * 2;
// // //     })
// // // );

// // // console.log(
// // //     arr.filter((item, index, arr) => {
// // //         return item % 2;
// // //     })
// // // );

// // // Array.prototype.myFilter = function (logic) {
// // //     const output = [];
// // //     for (let i = 0; i < this.length; i++) {
// // //         if (logic(this[i], i, this)) {
// // //             output.push(this[i]);
// // //         }
// // //     }
// // //     return output;
// // // };

// // // console.log(
// // //     arr.myFilter((item, index, arr) => {
// // //         return item % 2;
// // //     })
// // // );

// // // console.log(
// // //     arr.reduce((acc, curr, index, arr) => {
// // //         return acc + curr;
// // //     }, 0)
// // // );

// // // Array.prototype.myReduce = function (logic, initialValue) {
// // //     // if (!initialValue) return;
// // //     var acc = initialValue;
// // //     for (let i = 0; i < this.length; i++) {
// // //         acc = acc ? logic(acc, this[i], i, this) : this[i];
// // //     }
// // //     return acc;
// // // };

// // // console.log(
// // //     arr.myReduce((acc, curr, index, arr) => {
// // //         return acc + curr;
// // //     }, 0)
// // // );

// // const students = [
// //     { studentName: "Amit", rollNo: 1, marks: 85 },
// //     { studentName: "Sita", rollNo: 2, marks: 92 },
// //     { studentName: "Rahul", rollNo: 3, marks: 76 },
// //     { studentName: "Priya", rollNo: 4, marks: 89 },
// //     { studentName: "Ankit", rollNo: 5, marks: 67 },
// // ];

// // // ["AMIT", "SITA", "RAHUL", "PRIYA", "ANKIT"];
// // const capitalStudent = students.map((item) => {
// //     return item.studentName.toUpperCase();
// // });

// // // console.log(capitalStudent);

// // //  Details of those student whi score more then 60 marks

// // const moreThen60 = students
// //     .filter((item) => {
// //         if (item.marks > 90) return true;
// //         return false;
// //     })
// //     .filter((item) => {
// //         if (item.rollNo > 1) return true;
// //         return false;
// //     });

// // // console.log(moreThen60);

// // // Calculate the sum of the marks of all the students

// // const sumMarks = students.reduce((acc, item) => {
// //     acc = acc + item.marks;
// //     return acc;
// // }, 0);

// // console.log(sumMarks);

// // const moreThen60Names = students
// //     .filter((item) => {
// //         if (item.marks > 80) return true;
// //         return false;
// //     })
// //     .map((item) => {
// //         return item.studentName.toUpperCase();
// //     });

// // console.log(moreThen60Names);

// // (function (x) {
// //     return (function (y) {
// //         console.log(x);
// //     })(2);
// // })(1);

// // var x = 21;
// // var fun = function () {
// //     console.log(x);
// //     var x = 20;
// // };
// // fun();

// var addsix = createBase(8);
// addsix(10); // 16
// addsix(21); // 22

// function createBase(six) {
//     return function (n) {
//         console.log(n + six);
//     };
// }

// sum(2)(5)(6)()

function sum(a) {
    return function (b) {
        // console.log(a);
    };
}

console.log(null === undefined);
