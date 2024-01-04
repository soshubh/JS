// static keyword use to not give the accses to the every one
class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const temp = new User("shubh")
// console.log(temp.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}


const phone =  new Teacher("iphone ","i@gmail.com")
phone.logMe()
// console.log(phone.createId());