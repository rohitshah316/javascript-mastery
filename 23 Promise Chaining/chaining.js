

// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve({
//                 id:1,
//                 name:"rohit"
//             })
//         }, 2000);
//     })
// }

// getUser().then((result)=>{
//     console.log(result)
// })



// function getUser(){
//     return Promise.resolve({
//         id:1,
//         name:"rohit"
//     });
// }

// function getPosts(userId){
//     return Promise.resolve([
//         "post1","post2"
//     ])
// }


// getUser()
// .then((user)=>{
//     return getPosts(user.id);
// }).then((posts)=>{
//     console.log(posts);
// })


// function getUser(){
//     return Promise.resolve("Rohit");
// }

// function getPosts(){
//     return Promise.resolve(["JS","React"]);
// }


// getUser()
// .then((user)=>{
//     console.log(user)

//     getPosts()
// }).then((posts)=>{
//     console.log(posts)
// })


// Promise.resolve(10)
// .then((num)=>{
//     console.log("A: ",num);

//     return num+5;
// })
// .then((num)=>{
//     console.log("B: ",num);

//     return num*2;
// })
// .then((num)=>{console.log("C: ",num)});

Promise.resolve(5)
    .then((num) => {
        console.log(num);
        return;
    })
    .then((value) => {
        console.log(value);
    });