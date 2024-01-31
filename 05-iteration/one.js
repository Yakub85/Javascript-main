//For loop
// let n=5
// for (let i = 0; i < n; i++) {
//     console.log(`${i+1}--> Hello`);
    
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log("5 are awesome");
//     }
//     console.log(`${i}--> Hello`);
    
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`Inner loop value ${j} and outer loop ${i}`);
//     }  
// }
// for (let i = 1; i <= 5; i++) {
    
//     for (let j = 1; j <= 5; j++) {
//         console.log(`${i*j}`);
//     }  
// }

let myArray =["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//break and continue

// for (let index = 1; index <=20; index++) {
//     if(index===5){
//         break;
//     }
//    console.log(`${index}`);
    
// }

for (let index = 1; index <=20; index++) {
    if(index===5){
        continue;
    }
   console.log(`${index}`);
    
}