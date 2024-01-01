//Primitive

// 7 Types : String, Number, boolean, null, undefined, Symbol(use to make any value unique)
// bigint

const id = Symbol('123')
const anotherID = Symbol('123')

// id and anotherID are diffrent or unique




// Non primitive ( Reference)

//Array, Objects, Functions 
const heros = ["Saktiman", "bashah", "Don"]
let object = {
    name: "shubh",
    age: 23,
}
const myFunction = function(){
    console.log("Hello Cuties!");
}

console.log(typeof myFunction);

// +++++++++++++++++++++
// Stack and Heap memory is used to save data  
// Stack( Primitive), Heap (Non-Primitive)

let myYouTube = "Shubh"
let anotherName =  myYouTube
 anotherName = "Me Shubh"

 console.table([myYouTube, anotherName]);

 let  userOne = {
    name : "Shubh",
    upi : "soshubh@ybl"
 }

 let userTwo = userOne;
  
 userTwo.name = "Not Shubh"
 console.table([userOne,userTwo])