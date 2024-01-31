function sayMyName() {
    console.log("Y")
    console.log("A");
    console.log("Q");
    console.log("U");
    console.log("B");
}

// sayMyName()

// function addTwoNuber(num1,num2) {
//     console.log(num1+num2);
// }

function addTwoNuber(num1,num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

// const result = addTwoNuber(4,7)
// console.log("Result is",result);
// addTwoNuber(4,"7")
// addTwoNuber(3,null)

// function loginUserMessage(username){
//     if (username === undefined) {  //username===undefine or !username is same
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage("Yaqub"));
// console.log(loginUserMessage());//here output is undefined becouse we don't pass any arguments

//Default arguments
function loginUserMessage(username= "Yaqub"){
    if (!username) {  //username===undefine or !username is same
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Yaqub Ansari"));
// console.log(loginUserMessage());

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(20));

// function calculateCartPrice(...num1){   ///...rest operator
//     return num1
// }
// console.log(calculateCartPrice(20,40,60));

function calculateCartPrice(val1,val2,...num){   ///...rest operator
    return num
}
console.log(calculateCartPrice(20,40,60,70));
// how to handle object as function
const user = {
    username : "yaqub",
    price: 199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:200
})

const myNewArray = [200,300,400,100]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,3,2,4,5,6]));