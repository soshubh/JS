const coding = ["cpp","js","c#","py"]

// coding.forEach( function (item) {
//     console.log(item);

// } )

coding.forEach((item)=>{
    // console.log(item);
})


function print(x){
    // console.log(x);
}
coding.forEach(print)


coding.forEach((item,index , array)=>{
    console.log(item, index, array)
})






const myCoding = [
    {
        lagName : "Javascript",
        langFileName : "js"
    },
    {
        lagName : "java",
        langFileName : "java"
    },
    {
        lagName : "python",
        langFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.lagName);
})