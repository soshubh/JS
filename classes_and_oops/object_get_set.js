const user = {
    _email: "workforshubhsingh@gmail.com",
    _password: "23321",






    get email() {
        return this._email.toUpperCase()

    },

    set email(value) {
        this._email = value
    }
}


const shubh = Object.create(user)

console.log(shubh.email);