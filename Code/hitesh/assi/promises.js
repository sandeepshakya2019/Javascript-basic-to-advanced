const pr1 = new Promise((resolve, reject) => {
    // some activities
    setTimeout(() => {
        let ex = 0;
        ex = 2 + 2;
        console.log("Set Timeout completed s");
        const data = [{ name: "sandeep", email: "sandeep" }];
        if (ex === 4) {
            resolve({ data: data, msg: "Completed", statusCode: 200 });
        } else {
            reject({ data: [], msg: "Rejected", statusCode: 400 });
        }
    }, 1000);
});

// console.log(pr1);

// pr1.then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.log(e);
// });

async function callPromise() {
    try {
        const res = await pr1;
        console.log(res.data[0]);
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Done");
    }
}
callPromise();
