const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["saktiman", "naagraj"]

const myArray2 = new Array(1,2,34,5)
console.log(myArray[0]);

// Array Methods
myArray.push(6)
myArray.push(334)

myArray.pop()

myArray.unshift(32) // add value to first index
myArray.shift() // remove from first

console.log(myArray.includes(9))
console.log(myArray.indexOf(9));// give index or -1
 
const newArr = myArray.join()
console.log(typeof newArr);//string

console.log("A ", myArray);
const myn1=myArray.slice(1,3)

console.log(myn1);
console.log(myArray);

const myn2=myArray.splice(1,3)
//splice : medupulate the orignal Array
console.log(myn2);
console.log(myArray);





