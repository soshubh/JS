// JAn 1 1970
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreateDate = new Date (2023,0,23)
console.log(myCreateDate.toDateString());

let myCreateDat1 = new Date (2023,0,23,5,30)
console.log(myCreateDate1.toLocaleString());

const date1= new Date ("01-03-2024")
console.log(date1.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})

