setTimeout(() => {
    console.log("Callback fuxntionm");
}, 0);

function x(params) {
    // params();
    console.log("x runs");
}

x(
    (function () {
        console.log("y calls");
    })()
);
