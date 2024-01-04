<<<<<<< HEAD
//let, var, const 

let a = 10
const b = 30
var c = 20

console.table([a, b, c])
if (true) {
    let a = 200
    const b = 300
    var c = 200
    console.table([a, b, c])
}

console.table([a, b, c])

//expressions
const addTwo = function(num){
    return num+1;
}
=======
//let, var, const 

let a = 10
const b = 30
var c = 20

console.table([a, b, c])
if (true) {
    let a = 200
    const b = 300
    var c = 200
    console.table([a, b, c])
}

console.table([a, b, c])

//expressions
const addTwo = function(num){
    return num+1;
}
>>>>>>> 2d019bc0762daf42df6c7cba7f879c969f85453b
console.log(addTwo(3))