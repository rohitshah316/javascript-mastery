//Promise.race()
//Promise.race() starts all promises at the same time, just like Promise.all()

//Promise.all()->watis for all promises
//Promise.race()-> returns as soon as the first promise settles(resolve or rejects)

// function delay(ms,value){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve(value)
//         }, ms);
//     })
// }

// const p1=delay(3000,"apple");
// const p2=delay(1000,"banana");
// const p3=delay(2000,"mango");

// Promise.race([p1,p2,p3])
// .then(result=>{
//     console.log(result)
// })

//Promise.race() ignores the remaining promises once the first one settles
//output: banana
//resolves with banana



// const p1=new Promise((_,reject)=>{
//     setTimeout(() => {
//         reject("apple error")
//     }, 1000);
// })

// const p2=new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("banana")
//     }, 2000);
// })

// Promise.race([p1,p2])
// .then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })


// | Feature                  | `Promise.all()` | `Promise.race()`                       |
// | ------------------------ | --------------- | -------------------------------------- |
// | Starts promises together | ✅               | ✅                                      |
// | Waits for all            | ✅               | ❌                                      |
// | Returns first result     | ❌               | ✅                                      |
// | Fails if one rejects     | ✅ Immediately   | ✅ If the first settled promise rejects |
// | Result                   | Array of values | Single value or error                  |


//  function delay(ms,value){
//         return new Promise(resolve=>{
//             setTimeout(() => {
//             resolve(value)
//         }, ms);
//         })
// }

// const p1=delay(4000,"A");
// const p2=delay(1000,"B");
// const p3=delay(2000,"C");

// Promise.race([p1,p2,p3]).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.error(err)
// })


const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.race([p1, p2, p3])
    .then(result => console.log(result));