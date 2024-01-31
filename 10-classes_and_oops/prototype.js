// let myName="Yaqub      "
// let myfullName ="Yakub Ansari   "

// console.log(myName.truelength);


let myHeros=["Thor","Captain"]

let heroPower ={
    thor:"Hammer",
    captain:"nevergiveup",

    getCaptainePower : function(){
        console.log(`Captain power is ${this.captain}`);
    }
}

Object.prototype.yakub = function(){
    console.log(`yakub is present in all objects`);
}

Array.prototype.heyYakub = function(){
    console.log(`Yakub say hello`);
}

//heroPower.yakub()
// myHeros.heyYakub()
// myHeros.yakub()
// heroPower.heyYakub()


//inheritance

const User ={
    name:"Yaqub",
    email:"yakub@gmail.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport ={
    isAvailable:false
}

const TASupport = {
    makeAssignment :'Js Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User



//Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherName ="ChaiaurCode    "
console.log(anotherName.length)

String.prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherName.trueLength()
"Yaqub".trueLength()
"Yaqub Ansari".trueLength()