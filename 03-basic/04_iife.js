// Immediately Invoked Function Expression (IIFE)

//name iife
(function chai(){
    console.log(`DB CONNECTED`);
})();

//non-name iife
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Yaqub Ansari');


//for interview question what is iife or why use?
//global scope ke polution se problem hoti h kai baar to us global scope ke jo variable h ya jo declaration h to uske polution ko hatane ke liye hmne iife ka use kiya