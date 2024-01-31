// for each loop

const coding=["js","python","java","cpp","rust"]

// coding.forEach( function (item){
//     console.log(item);
// })

// const num=[1,2,3,4,5]
// num.forEach(function (val){
//     console.log(val);
// })


// coding.forEach((v)=>{
//     console.log(v);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index,arr)=>{
//     console.log(item, index, arr);
// })

const myCoding=[
    {
        languagename:"javascript",
        languageExtension:"js"
    },
    {
        languagename:"java",
        languageExtension:"java"
    },
    {
        languagename:"jpython",
        languageExtension:"py"
    },
    {
        languagename:"C++",
        languageExtension:"cpp"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languagename);
 
})