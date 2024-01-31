const user={
    username: "Yaqub",
    price : 999,
    //this keyword refer curent context
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username ="Yaqub Ansari"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username ="Yaqub"
//     console.log(this.username);
// }

// chai()

// const chai =function(){
//     let username ="Yaqub"
//     console.log(this.username);
// }

const chai =()=>{
    let username ="Yaqub"
    console.log(this);
}


// chai()

// const addTwo = ()=>{
//     return 7+5
// }
// const addTwo = ()=> 7+5

// console.log(addTwo());
// console.log(addTwo());

// const addTwo = (num1,num2)=>{
//   return num1 + num2
// }

// const addTwo = (num1,num2)=> num1 + num2

// const addTwo = (num1,num2)=> (num1 + num2)
 
//how to return object
// const addTwo = (num1,num2)=> (username:"Yakub")

// const addTwo = (num1,num2)=> {username:"Yakub"}

const addTwo = (num1,num2)=>( {username:"Yakub"})

console.log(addTwo(8,9));

// const myArray = [1,2,3,4,5]
// myArray.forEach()