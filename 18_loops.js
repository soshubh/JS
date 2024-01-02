// For

// for (let i = 0; i < 5; i++) {
//     console.log(i, " ")}


let arr = [4,5,6,2,9]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}


// for 0f loop

const array = [1,2,3,4,5,56]

for(const num of array){
    // console.log(num);
}

const greetings = "Hello Shubh"

for(const num of greetings){
    console.log(num);
}


//Maps -  keu value paire with unique data
const map =new Map()
map.set('IN', "India")
map.set('USA', "Unites State of America")

console.log(map);
for(const key of map){
    console.log(key);
}
for(const [key, value] of map){
    console.log(key, " : ",value);
}



const myObject={
    js  : 'Javascript',
    cpp : 'C++',
    rb  : 'ruby',
    swift : "Swift by "
    
}

for(const key in myObject){
    console.log(key ,"-", myObject[key]);
}

const programming = ["js","cpp","swift"]

for(const key in programming)
{
    console.log(key, " : ", programming[key]);
}


