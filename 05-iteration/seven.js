
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum=myNum.map((num)=>{
//     return num+10
// })
// console.log(newNum);

//Chaining rule
const newNum = myNum
                    .map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>=40)


console.log(newNum);

// myNum.forEach((num)=>{
//     console.log(num+10);
// })

// const newnum=[]
// myNum.forEach((num)=>{
//     newnum.push(num+10)
// })

// console.log(newnum);