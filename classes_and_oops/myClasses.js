// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }


// const temp = new User("shubh", "shubh@gmail.com", "1234")

// console.log(temp.encryptPassword())
// console.log(temp.changeUsername());



//behind the scene
function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const temp = new User("Singh", "sing@gmail.com", "4321")

console.log(temp.encryptPassword())