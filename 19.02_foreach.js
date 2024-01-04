const coding = ["js", "ruby", "java", "python", "cpp"]

const vlaues = coding.forEach((item) => {
    // console.log(item)
    return item
})

console.log(vlaues);
//foreatch return nothing



const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnum = num.filter((number) => number > 5)
const newnum = num.filter((number) => {
    return number > 4
})

console.log(newnum)

const num1= []
num.forEach((num)=>{
    if(num>4)
     num1.push(num)
})

console.log(num1)

