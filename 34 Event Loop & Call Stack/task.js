// // console.log("Start");

// // setTimeout(() => {
// //     console.log("Timeout")
// // }, 0);

// // Promise.resolve().then(()=>{
// //     console.log("Promise");
// //     Promise.resolve().then(()=>{
// //         console.log("sec")
// //         setTimeout(() => {
// //             console.log("hi")
// //         }, 0);
// //     })


// // })


// // console.log("End")


// // //callback queue also called the Macrotask Queue

// // //JS has two queues
// // //Microtask Queue //higher priority
// // //Promise.then(),queueMicrotask(),MutationObserver

// // //Macrotask Queue //Lower priority
// // //setTimeout(),setInterval(),I/O events

// // //whenver the callstack becomes empty, the event loop checks: 
// // //1. Microtask queue first
// // //2. macrotask queue second


// // //after the call stack is empty, js executes ALL microtasks before executing even ONE macrotask


// // async function getData() {
// //     console.log("A");

// //     await Promise.resolve();

// //     console.log("B");
// // }

// // console.log("Start");

// // getData();

// // console.log("End");
// async function test() {
//     console.log("1");

//     await Promise.resolve();

//     console.log("2");

//     await Promise.resolve();

//     console.log("3");
// }

// console.log("A");

// test();

// console.log("B");

console.log("Start");

setTimeout(() => {
    console.log("Timeout");

    Promise.resolve().then(() => {
        console.log("Promise inside Timeout");
    });

}, 0);


Promise.resolve().then(() => {
    console.log("Promise 1");
});

async function run() {
    console.log("Async Start");

    await Promise.resolve();

    console.log("Async End");
}

run();

console.log("End");