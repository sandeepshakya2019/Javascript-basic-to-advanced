const cluster = require("cluster");
const http = require("node:http");
const os = require("os");

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);

    const numCPUs = os.cpus().length;
    console.log(`Forking ${numCPUs} workers...`);

    for (let i = 0; i < 2; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // console.log(`Worker process ${process.pid} is running`);

    const server = http.createServer((req, res) => {
        console.log(`Worker ${process.pid} handling ${req.method} ${req.url}`);

        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Home page");
        } else if (req.url === "/slow-page") {
            for (let i = 0; i < 6000000000; i++) {} // Simulated CPU load
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Slow Page");
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page not found");
        }
    });

    server.listen(8000, () => {
        console.log(`Server running on port 8000 by worker ${process.pid}`);
    });
}
