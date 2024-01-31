//Declaration of variables
const accountId=144553
let accountEmail="yaqub@gmail.com"
var accountPassword= "12345"
accountCity="Lucknow"
let accountState; 

//accountId= 2 //changes not allowed

accountEmail="yakub@gmail.com"
accountPassword="123"
accountCity="Deoria"

console.log(accountId);
/*Prefer not to use var becouse of issue in block scope
and fucntional scope */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
