// rateLimiter.js
const rateLimitMap = new Map(); // key: IP, value: { count, firstRequestTime }

const RATE_LIMIT_WINDOW_MIN = 10; // 30 sec
const MAX_REQUESTS = 4;

export default function customRateLimiter(req, res, next) {
    console.log(req.ip);
    const latestTime = new Date();
    if (rateLimitMap[req.ip]) {
        rateLimitMap[req.ip].count = rateLimitMap[req.ip].count + 1;
    } else {
        rateLimitMap[req.ip] = { count: 0, time: new Date() };
    }
    if (rateLimitMap[req.ip]?.time) {
        const leftTime = latestTime - rateLimitMap[req.ip]?.time;
        const msLeft = Math.floor(leftTime / 1000);
        console.log(`${msLeft} ms`);
        if (msLeft < RATE_LIMIT_WINDOW_MIN) {
            if (rateLimitMap[req.ip]?.count > MAX_REQUESTS) {
                res.status(429).send({
                    data: [],
                    msg: "Rate Limit Reached in Time Frame",
                });
                return;
            }
        } else {
            rateLimitMap[req.ip].count = 0;
            rateLimitMap[req.ip].time = new Date();
        }
    }

    console.log(rateLimitMap);
    next();
}
