class User{
    
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is:  ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const yaqub = new User("Yaqub")
// console.log(yaqub.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const android = new Teacher("Vivo","vivo@gamil.com")
console.log(android.createId())