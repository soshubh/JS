const storeValue = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(storeValue);
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI)


const tempObject ={
    name : "Chai ginger",
    price :250,
    isAvailavle : true,



    orderChai : function(){
        console.log("chai orderChai");
    }
}

console.log(Object.getOwnPropertyDescriptor(tempObject,'name'));
// console.log(Object.getOwnPropertyDescriptor(tempObject,'price'));
// console.log(Object.getOwnPropertyDescriptor(tempObject,'isAvailavle'))

Object.defineProperty(tempObject, 'name', {
    writable: false,        
    enumerable: false,      
    configurable: false,
    // enumerable :false
})
// console.log(Object.getOwnPropertyDescriptor(tempObject,'name'));



for(let [key,value] of Object.entries(tempObject)){
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`);
}