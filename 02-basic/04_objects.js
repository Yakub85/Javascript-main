// const tinderUser = new Object()//singleton object
 
const tinderUser = {}//non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sameer"
tinderUser.isLogged = false

// console.log(tinderUser);
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        firstname:"Yaqub",
        lastname:"Ansari"
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.firstname)

const regularUser2 = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Yaqub",
            lastname:"Ansari"
        }
    }
}
// console.log(regularUser2);
// console.log(regularUser2.fullname);
// console.log(regularUser2.fullname.userfullname.firstname)

const obj1 ={
    1:"A",
    2:"B"
}
const obj2 ={
    3:"C",
    4:"D"
}
const obj3 ={
    5:"E",
    6:"F"
}
// const obj3={obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)
// const obj4 ={...obj1,...obj2,...obj3}//spreed method most used
// console.log(obj4);

const users = [
    {
        id: 1,
        email:"y@gmail.com"
    },
    {
        id: 1,
        email :"y@gmail.com"
    },
    {
        id: 1,
        email:"y@gmail.com"
    },
]
// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename:"js in hindi",
    price :"999",
    courseInstructor:"Hitesh Sir"
}

//course.courseInstructor

const {courseInstructor: instructor} =course  //destructor of object
console.log(instructor);

// const navbar = (company) =>{

// }
// navbar(company = "chai aur code")

//API structure | JSON formate

// {
//     "name":"Hitesh sir",
//    " coursename":"js in hindi",
//    " price":"free"
// }

[
    {},
    {},
    {}
]