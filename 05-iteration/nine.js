const array=[1, 2, 3, 4]

const initialValue = 0

//reduce using function
// const myTotal = array.reduce(function(acc,curVal){
//     console.log(`acc: ${acc} and curVlue: ${curVal}`);
//     return acc + curVal
// },0)


//using arrow function

const myTotal = array.reduce((acc,curVal)=> acc + curVal,0)

// console.log(myTotal);

const shopingCart = [
    {
        itemName: "Js Course",
        price:999
    },
    {
        itemName:"Python Course",
        price: 1999
    },
    {
        itemName:"Fluter",
        price:2999
    },
    {
        itemName:"Data Science",
        price:9999
    }
]

const priceToPay = shopingCart.reduce((acc,item)=>acc +item.price,0)

console.log(priceToPay);