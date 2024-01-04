<<<<<<< HEAD
const myArr = [1, 2, 3]

// const myTotal = myArr.reduce(function (acc, currval) {
//     console.log(`Accumilator : ${acc} and Current Value  : ${currval}`);
//     return acc + currval
// }, 0)


const myTotal = myArr.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);



const shoppingCart = [
    {
        itemname: "jscorese",
        price: 2000
    },
    {
        itemname: "Data Since",
        price: 1000
    },
    {
        itemname: "Mobile ",
        price: 5900
    }
]


const pricToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

=======
const myArr = [1, 2, 3]

// const myTotal = myArr.reduce(function (acc, currval) {
//     console.log(`Accumilator : ${acc} and Current Value  : ${currval}`);
//     return acc + currval
// }, 0)


const myTotal = myArr.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);



const shoppingCart = [
    {
        itemname: "jscorese",
        price: 2000
    },
    {
        itemname: "Data Since",
        price: 1000
    },
    {
        itemname: "Mobile ",
        price: 5900
    }
]


const pricToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

>>>>>>> 2d019bc0762daf42df6c7cba7f879c969f85453b
console.log(pricToPay);