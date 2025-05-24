function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`${this.username} Greeting !!`);
    };
    return this;
}

const userOne = new User("sandeep_shakya", 1, true);
const userTwo = new User("vishal_shakya", 1, false);

userOne.greetings();
userTwo.greetings();

console.log(userOne.constructor);
// console.log(userTwo);
