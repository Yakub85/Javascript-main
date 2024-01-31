class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    /*this give error because here consturctor and set  both set password to solve this problem we change the password variables in get and set method password replace _password*/
    get password(){
        return `${this._password}yakub`
    }

    set password(value){
        this._password = value
    }
}

const user = new User("yakub@gmail.com","abc")
console.log(user.password);
console.log(user.email);