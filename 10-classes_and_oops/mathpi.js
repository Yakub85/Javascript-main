const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const mynewObj = Object.create(null)

const chai = {
    name:'Ginger Chai',
    price: 250,
    isAvailable:true,

    orderChai: function(){
        console.log("Chai empty");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


//we can define own property
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:true,
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// console.log(chai.name);
// chai.name ="CHAI"
// console.log(chai.name);

// for (let [key, value] of chai){
//     console.log(`${key}and ${value}`);
// }

for (let [key, value] of Object.entries(chai)){

    if ( typeof value!=='function'){
        console.log(`${key}:${value}`);
    }
   
}