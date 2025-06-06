const pr = new Promise((resolve, reject) => {
    let cart = true;
    setTimeout(() => {
        if (cart) {
            resolve({
                data: ["shoes", "tshirts"],
                success: true,
                statusCode: 200,
            });
        } else {
            reject({ data: [], success: false, statusCode: 400 });
        }
    }, 1000);
});

console.log(pr);

pr.then((data) => {
    console.log("data", data);
})
    .catch((err) => {
        console.log("Err", err);
    })
    .then(() => {
        console.log("Called");
    })
    .finally(() => {
        console.log("Always Runs");
    });
