// // //before
// // fetch(url)
// // .then(res=>res.json())
// // .then(data=>console.log(data))
// // .catch(err=>console.log(err));


// // // after
// // async function getData() {
// //     try{
// //         const res=await fetch(url);
// //         const data=await res.json();
// //         console.log(data);
// //     }catch(err){
// //         console.log(err)
// //     }
// // }


// //an async fucniton always returns a promsie, regardless of what you explicitly return.


// // async function greet(){
// //     return "Hello";
// // }

// // console.log(greet())


// //js automatically wraps the returned value as:
// //return Promise.resolve("Hello");


// // async function greet(){
// //     return "Hello";
// // }
// // greet().then((message)=>{
// //     console.log(message);
// // })




// async function greet(){
//     return "Hello";
// }

// async function displayGreeting(){
//     const message=await greet();
//     console.log(message);
// }

// displayGreeting();

// //await pauses the execution of the current async fucntion until the promise settles. Once its fulfilled, await gives the resolved value.
// //await lets you write it in synchronous-looking style
// //await is only vaild inside an async function(or at the top level of an ES module)

// function waitTwoSeconds(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("finished waiting!")
//         }, 2000);
//     });
// }

// async function start(){
//     console.log("1. Starting...");

//     const result=await waitTwoSeconds();

//     console.log("2.",result);
//     console.log("3. Done");
// }

// start();

//await pauses only the current async function, not the entire js program


// async function test(){
//     console.log("1");

//     await Promise.resolve();

//     console.log("2");
// }
// console.log("A");
// test();

// console.log("B");


// async functions always return a Promise.
// await works only inside async functions.
// await gives you the resolved value, not the Promise.
// It pauses only the current async function.
// It does not block the JavaScript engine.
// Even await Promise.resolve() resumes asynchronously.


//fetch() returns a response object


async function getUsers(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();

    const list=document.getElementById("userList");

    data.forEach(user => {
        const li=document.createElement("li");
        li.textContent=user.name;
        list.appendChild(li)
    });
}

getUsers();