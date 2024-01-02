const user={
    name: "shubh",
    price :"999",

    welcomeMessage : function(){
        console.log(`${this.name} , welcome to website`);
      console.log(this);
    }
}

// user.welcomeMessage()
// user.name="sam"
// user.welcomeMessage()

// console.log(this); // it will return window object

// function chai(){
//     console.log(this)
// }
// chai()



const chai =  () =>{
    let usernaeme = "Shubh"
    console.log(this)
    console.log(this.usernaeme);
}

// chai();

// const addTwo = (numOne, numTwo) =>{
//     return numOne+numTwo
// }
// console.log(addTwo(5,6));



// implicit return\
// const addTwo = (numOne, numTwo) =>  numOne+numTwo
// const addTwo = (numOne, numTwo) =>  (numOne+numTwo)
const addTwo = (numOne, numTwo) => ({user:"shhb"})


console.log(addTwo(5,6));



const myArr = [3,43,3,3,3,1,3]
myArr.forEach (() =>{})