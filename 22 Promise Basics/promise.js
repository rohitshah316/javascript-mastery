//promises make asynchronous code easier to read,chain,handle errors, and maintain

//a promise can be in only of these three states:
//pending, fullfilled(success), rejected(failure)

//1. pending: the operation is still running. ex: Downloading...
//2. fulfilled: the operation completed successfully. ex: User downloaded successfully
//3. rejected: something went wrong: ex:Network Error

// const promise=new Promise((resolve,reject)=>{
//     console.log("Promise started");
// })


// console.log("End");
// new Promise(...)

// This creates a Promise object.

// (resolve, reject) => { ... }

// This function is called the executor function.

// JavaScript automatically calls it immediately when the Promise is created.


//what is resolve()?
//resolve(value) tells js: this promise completed successfully. store thsi value as the result

// const promise=new Promise((resolve,reject)=>{
//     resolve("User downloaded");
// })

// console.log(promise);



//what is reject()?
//reject(error) tells js: the asynchronous operation failed.
// const promise=new Promise((resolve,reject)=>{
//     resolve()
//     reject("Network Error");
// })

// console.log(promise);



// const promise=new Promise((resolve,reject)=>{
//     resolve("User downloaded");
// });

// promise.then((result)=>{
//     console.log(result);
// })




// const promise=new Promise((resolve,reject)=>{
//     console.log("1");
//     resolve("success");
//     console.log("2");
// })

// console.log("3");

// promise.then((result)=>{
//     console.log("4");
//     console.log(result);
// });

// console.log("5");



console.log("A");

const promise=new Promise((resolve,reject)=>{
    console.log("B");
    resolve("done");
    console.log("C");
});

promise.then((result)=>{
    console.log(result);
})

console.log("D");