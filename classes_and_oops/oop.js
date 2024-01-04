//Object Litreles 
const user = {
    username: "Shubh",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function () {
        console.log('Got user details')
        console.log(`username : ${this.username}`);
        console.log(this);
    }
}


console.log(user.username);
console.log(user.getUserDetails());





function User(username, logginCount, isLoggedIn) {
    this.username = username
    this.logginCount= logginCount
    this.isLoggedIn = isLoggedIn

    // return this
}

const userOne = new  User("shubh",2,true)
const userTwo = new  User("shubh singh",12,false)
console.log(userOne);
console.log(userTwo);
