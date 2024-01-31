// if statement

const isUserloggedIn = true
const temperature = 41


// if (temperature < 50) {
//     console.log('less than 50');
// }
// console.log("temperature is greater than 50");


//if else statement
// if (temperature < 50) {
//     console.log('less than 50');
// }
// else{
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===(strict equal),!==

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //here give error becouse power not defined here

const balance = 1000
// if (balance > 500) console.log("test");//not recommended

// if (balance < 500) {
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if(balance < 900){
//     console.log("Less than 900");
// } else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true

const loggedFromGoogle = false
const loggedFromEmail = true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedFromGoogle || loggedFromEmail) {
    console.log("User logged In.");
}