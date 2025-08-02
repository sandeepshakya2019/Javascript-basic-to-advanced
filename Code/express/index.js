import express from "express";
import { users, products } from "./constants.js";
const app = express();
import customRateLimiter  from "./rateLimiter.js";
// const sendResponse = { ip : {count: 0, time: } };

app.use(customRateLimiter);
app.get("/", (req, res) => {
    res.send("done");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("server is running is  port ", port);
});

// htttp verbs
// stattus code
// route params
// query string and query parameter
// app.use(express.json())
// regoster middleware globally
// app.use(express.static())
// middleware
// cors error
// get, post (req.body, like more ..), patch, put, delete
// put (update entire record) vs patch(update the partial resource)

// middleware (req,res, next)
// why next ?
// req.method, req.url
// register middlware for certain urls
// order of middleware is neccesary for logging the middleware
// nested middlewares
// next takes args ? (errors or ?)
// to get the data from middleware attached to the request and take in the next fucntion

// validation (express-validator)
// methods in express-validator
// methods return a valdiaiton chain isString, notEmpty, isLenght,  withMessage for custom error msg, custom-vlaidaor fucntion more ...
// express-validaor is attached to the request automatically
// validationresult method in express-validator
// body validaor, query validator and more
// query().isString().notEmpty().withMessgae('"")
// body("username").notEmpty().withMessage("").isLength({min, max})
// const result = validationresult(request)

// validate multiple field
// 1) pass as multplie middleware 2) pass in array [body().WithMessage(), query().isLength()]
// validate header, cookies, route params, query, body
// schema for validator validationSchema create and then checkSchmea(schemaObject)
// .js extension solved by .mjs in modules (implort)
//

// express-routers
// regsiter with root routes (index.js) -> userRoute, prodcutRoute
//  index.js route -> main server.js file

// cookies (http-cookies)
// why cookies (who send to whom)
// devtools -> applciation -> cookies
// any security issues using the cookies
// used for authentication and authorization
// jwt
// cookies is stateless
// res.cookie(args) give all the args
// httpOnly, secure, and more
// expiry of cookies ?
// how to set and read the cookies in server ? can we read it from frontend ?
// any one can steal the cookies ?? how ??
// req.header.cookie
// cookie-parser to parsed the cookie
// how to use cookie-parser
// access-refresh token
// signed cookies -> secret key cookie parser
// how it affect to cookie (we ccan't see the directly )
// req.cookies, req.signedCookies, req.header.cookies

// Sessions
// http is stateless
