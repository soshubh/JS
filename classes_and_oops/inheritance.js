class user {
    constructor(user) {
        this.user = user;
    }

    logMe() {
        console.log(`UserName is ${this.user}`);
    }
}


class Teacher extends user {
    constructor(user, email, pass) {
        super(user)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`This coure was added by ${this.user}`);
    }
}


const temp =new  Teacher("shubh","shubh@gmail.com", "1234")
temp.addCourse()


const temp1 =  new user("singh")
temp1.logMe()


console.log((temp instanceof Teacher));