function SetUsername(username){
    // complex DB calls
    this.username=username;
    console.log("Called SetUsername");
}

function createUser(username, email, password){
    // SetUsername.call(username)
    SetUsername.call(this,username)

    this.email=email
    this.password=password

}

const temp = new createUser("shubh","shubh@fmial,com", "12345")
console.log(temp);