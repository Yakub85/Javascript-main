// for of
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const color=["red","green","blue"]
// for (const clr of color) {
//     console.log(`${clr}`);
// }

// const msg ="Good Morning"
// for (const m of msg) {
//     console.log(`${m}`);
// }


//Map
const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr',"France")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,":-",value);
// }

///object is not iterable using forof loop
const myObj = {
    1:"A",
    2:"B",
    3:"C"
}

// for (const [key,value] of myObj) {
//     console.log(key,":-",value);
// }