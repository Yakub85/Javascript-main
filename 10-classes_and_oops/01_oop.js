const user = {
    username: "Yaqub",
    loginCount: 8,
    signIn: true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`Username:${this.username}`);
        console.log(this);
    }
}
// user.username="Yaqub Ansari"
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function Users(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new Users("Yaqub Ansari",8,true)
const userTwo = new Users("Yakub",8,false)
console.log(userOne.constructor);
console.log(userTwo);

//new keyword is used to create an empty object which is called instance.
// this keyword refers to the current object