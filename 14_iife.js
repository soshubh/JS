// immediately invoked function expression (iife)
// Global scope ke variable se problem hoti hai kai bar, gloabal scop ke polution ko hatane ke liye ke liye use krte hain iife
//()() 

//named iif
(function chai() {
    console.log(`DB connnected`);
})();


(() => {
    console.log(`DB connected 2`)
})();


((name) => {
    console.log(`DB connected 3 ${name}`)
})('Shubh');



