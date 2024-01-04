class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        return `${this._password.toUpperCase()}Shubhsingh`
    }

    set password(value) {
        this._password = value
    }
}

const shubh = new User("workforshubh@gmail.com", "abc")
console.log(shubh.password);