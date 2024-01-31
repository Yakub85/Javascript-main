// const coding=["js","python","java","cpp","rust"]

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);// forEach does not return any value

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum=myNum.filter((num)=> {
//     return num>4
// })


//using forEach
// const newNum =[]
// myNum.forEach( (num)=>{
//     if (num>5){
//         newNum.push(num)
//     }
// })
// console.log(newNum);

const books = [
    {
        title:'Book One',genre:'Fiction',publish:1981,edition:2004
    },
    {
        title:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008
    },
    {
        title:'Book Three',genre:'History',publish:1999,edition:2007
    },
    {
        title:'Book Four',genre:'Non-Fiction',publish:2000,edition:2010
    },
    {
        title:'Book Five',genre:'science',publish:2001,edition:2011
    },
    {
        title:'Book Six',genre:'History',publish:1987,edition:2009
    },
    
]

let userBooks = books.filter((bk)=>bk.genre==="History")

//best practice
userBooks = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre==="History"
})

console.log(userBooks);