const tinderUser1 = new Object() //singleton object
const tinderUser2 = {} //non singleton object

console.table([tinderUser1, tinderUser2]);

const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "Temp_name"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const refularUser = {
    gamil: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shubh",
            lastname: "Singh"
        }
    }
}

console.log(refularUser.fullname.userfullname.firstname)

const ObjectOne = { 1: "a", 2: "b" }
const ObjectTwo = { 1: "a", 2: "b" }

// const ObjectThree = {ObjectOne, ObjectTwo}

// const ObjectThree = Object.assign(ObjectOne, ObjectTwo)
// const ObjectThree = Object.assign({}, ObjectOne, ObjectTwo)

const ObjectThree = { ...ObjectOne, ...ObjectTwo }


const user = [
    { id: 1, email: "work@gmail.com" },
    {

    }, {

    },
]

console.log(tinderUser)
console.log(Object.keys(tinderUser)); //Return a array of key values 

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Destructuring 
const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Shubh"
}

// course.courseInstructor => Shubh
const { courseInstructor } = course
console.log(courseInstructor) // => Shubh

const { courseInstructor: instructor } = course
console.log(instructor); // =>Shubh

