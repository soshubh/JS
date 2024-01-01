//  " " , ' '
// console.log('Shubh'+" Singh");
const name = "Shubh"
let repoCount = 50

// console.log(name + repoCount + " Value!");

//Sting enterpolition

console.log(`Hello Cuties my name is ${name} and repo count ${repoCount}!`);

const gameName = new String("CS-GO")

let array= gameName.split('-')
console.log(array);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('S'));


// CS-GO
// 01234
const newString=gameName.slice(1,4)
console.log(newString);

const newStringOne = "    shubh  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://shubh.com/shubh%20singh"
url.replace('%20','_')
console.log(url.includes('shubh'))


