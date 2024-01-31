//singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Yaqub",
    "full name":"Yakub Ansari",
    [mySym]:"mykey1",
    age:20,
    location:"Lucknow",
    eamil:"yaqub@gmail.com",
    isLogged:false,
    lastLoginDay:["Monday","Saturday"]
}
// console.log(JsUser.eamil);
// console.log(JsUser["eamil"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);
// //How to change value
// JsUser.eamil ="yaqoob@gmail.com"
// console.log(JsUser.eamil);
// Object.freeze(JsUser)//it freez the JsUser object it make unchangeble
// JsUser.eamil ="yaqoobkmc@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());