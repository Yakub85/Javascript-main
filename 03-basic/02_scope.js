
// var c = 300
let a = 30
if(true){
    let a = 10;
    const b = 20
    // console.log("INNER a",a);
   
}


//console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Yaqub"

    function two() {
        const website = "YouTube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true){
    const username = "Yaqub"
    if (username === "Yaqub"){
        const website = "YouTube"
        // console.log(username+" "+ website);
    }
    // console.log(website);//give error websit not defined here
}
// console.log(username);//give error username not defined here


//==============Interesting===================
console.log(addone(8));

function addone(num) {
   
    return num+1
}
// addone(5)

// addTwo(5) //give error 
//function expression
const addTwo = function(num){
    return num +2
}

console.log(addTwo(4));