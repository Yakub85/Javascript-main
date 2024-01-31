// Array
const myArr = [0,1,2,3,4,5]
const city = ["Lucknow","Deoria","Gorkhpur"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])

// Array Method 
// myArr.push(6) //push() add value at last index
// myArr.push(7)
// console.log(myArr);
// myArr.pop()//delete ele of last index
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr)

const myn2 = myArr.splice(1,4)
console.log("C",myArr)
console.log(myn2);