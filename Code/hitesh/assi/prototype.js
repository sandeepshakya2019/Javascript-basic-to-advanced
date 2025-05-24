function setUsername(username) {
    this.username = username;
}

function user(username, email) {
    setUsername.call(this, username);
    this.email = email;
}

let chai = new user("chai", "ss");
console.log(chai);
