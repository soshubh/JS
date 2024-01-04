function user(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (params) {
            this._email = params;
        }
    })

    
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (params) {
            this._password= params;
        }
    })
}

const shubh = new user("shubh@gmail.com",'232sh4')
console.log(shubh.email);