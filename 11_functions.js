function sayMyName() {
    console.log("Shubh");
}

// sayMyName()

function add(numOne, numTwo) {
    return numOne + numTwo
}
const result = add(4, 5)
// console.log("Result :", result);

function loginuserMessage(username) {
    // if(username=== undefined){
    //     return `please enter username `
    // }
    if (!undefined) {
        return `please enter username `
    }
    return `${username} just logged in`
}

const message = loginuserMessage("Shubh")
console.log(message);



//rest operator
function calculateCartPrice(...num1) {
    return num1;
}
const resultOut = calculateCartPrice(20, 40, 30, 3);
console.log(resultOut);

const user = {
    username: "Shubh",
    age: 32
}
function handlObject(anyobject) {
    console.log(`usernaem is ${anyobject.username} and age is ${anyobject.age}`);

}

handlObject(user)


const myArray = [30, 390, 29]
function returnArray(getArray,index ) {
    return getArray[index];
}
console.log("value at index 1 : ",returnArray(myArray,0));