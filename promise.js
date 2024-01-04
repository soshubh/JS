// fetch('https://api.github.com/users/soshubh').then().catch().finally()

const { error } = require("console")

const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls ,cryptography, nteork
    setTimeout(() => {
        console.log('Async task is complete')
        resolve()
    }, 1000)
})
promiseOne.then(() => {
    console.log("Promise consumed")
})









new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 100)
}).then(() => {
    console.log("Async 2 resolve");
})








const promiseThree = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({ username: "Shubh", gmail: "shubh@gmail.com" })
    }, 1000)

})
promiseThree.then((user) => {
    console.log(user);

})






const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Shubh", gmail: "shubh@gmail.com" })
        }
        else
            reject("Error Found")
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username)
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log('Your work is done');
    })








const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "JS", pass: "12345" })
        }
        else
            reject("Error Found : reject")
    }, 1000)
})

async function consumePromFive() {
    try {
        const response1 = await promiseFive
        console.log(response1);
    } catch (error) {
        console.log(error);
    }
}
consumePromFive()






// async function getUser() {
//     try {
//         const fetch = await import('node-fetch');
//         const response = await fetch.default('https://api.github.com/users/soshubh');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getUser();


fetch('https://api.github.com/users/soshubh')
    .then((response) => {
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
