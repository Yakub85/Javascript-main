// 01-Primitive Datatype are 7 type
// They are: String, Number, Boolean,null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

const bigNumber = 1354236474546745754n
// console.log(bigNumber);


//02-Refrence (Non Primitive) Dataype
//They are: Array, Objects, Function

const heros = ["shaktiman","Krish","Doga"];

let myObj = {
    name:"Yaqub Ansari",
    age:23,
}

const myFunction = function(){
    console.log("Chai aur Code");
}
// myFunction()
// console.log(typeof myFunction);
// typeof return type of datatype

// console.log(typeof id);

//===============================================

//Stack(Primitive),Heap(Non-Primitive)

let myYoutube = "Chai Aur Code"
let anotherName = myYoutube
anotherName = "Chai"
console.log(anotherName);
console.log(myYoutube);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne
 userTwo.email="users@gmail.com"

 console.log(userOne);
 console.log(userTwo);