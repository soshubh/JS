<<<<<<< HEAD
//Singleton
// Object.create


const mySym = Symbol("key1")
//  Object literals
let firstObject={
    name : "Shubh",
    "full name"  : "Shubh Singh",
    [mySym]:"mykey1",
    age : 20,
    location : "india",
    gmail  : "shubh@gmail.com",
    lastLoginDays : ["monday","Saturday"]
}
firstObject.greeting = function(){
    console.log(`Hello Js, ${this.name}`);
}


console.log(firstObject.gmail);
console.log(firstObject["gmail"])
console.log(firstObject["full name"]);
console.log(firstObject[mySym]);

firstObject.gmail ="work@gamil.com"
Object.freeze(firstObject) //after this object will not modified 



console.log(firstObject.greeting);// Function refrence will return
=======
//Singleton
// Object.create


const mySym = Symbol("key1")
//  Object literals
let firstObject={
    name : "Shubh",
    "full name"  : "Shubh Singh",
    [mySym]:"mykey1",
    age : 20,
    location : "india",
    gmail  : "shubh@gmail.com",
    lastLoginDays : ["monday","Saturday"]
}
firstObject.greeting = function(){
    console.log(`Hello Js, ${this.name}`);
}


console.log(firstObject.gmail);
console.log(firstObject["gmail"])
console.log(firstObject["full name"]);
console.log(firstObject[mySym]);

firstObject.gmail ="work@gamil.com"
Object.freeze(firstObject) //after this object will not modified 



console.log(firstObject.greeting);// Function refrence will return
>>>>>>> 2d019bc0762daf42df6c7cba7f879c969f85453b
console.log(firstObject.greeting());