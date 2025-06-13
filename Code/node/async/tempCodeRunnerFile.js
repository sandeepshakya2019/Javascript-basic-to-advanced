    process.nextTick(() => console.log("CB T PN 21"));
    Promise.resolve().then(() => console.log("CB T PM 25"));