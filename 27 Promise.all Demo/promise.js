//promise.all
//without promise.all()
// const users = await fetch("/users");
// const posts = await fetch("/posts");
// const comments = await fetch("/comments");

//suppose each request takes: 2sec, then total time becomes 6sec, which is called sequential exectuion.


//with promise.all()
// Promise.all([
//     fetch('/users'),
//     fetch('/posts'),
//     fetch('/comments')
// ])

//all requests start immediately. Total time=2sec  //huge performance improvement


//Promise.all() waits until every promise finisheds successfully.
//if one promsie fails, the entire Promsie.all() fails

// Promise.all([
//     Promise.resolve("A"),
//     Promise.resolve("B"),
//     Promise.resolve("C"),
// ]);

// //output ["A","B","C"]

// //but

// Promise.all([
//     Promise.resolve("A"),
//     Promise.reject("Error"),
//     Promise.resolve("C"),
// ]);
// //output Error //everything rejects immediately




//syntax
/*
Promise.all([
    promise1,
    promse2,
    promise3
])
.then(results=>{
    console.log(results)})
.catch(error=>{
    console.log(error)
    })



    or with async/await

    const results=await Promiseall([
    promise1,
    promise2,
    promise3,
    ])
*/

// function delay(ms,value){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve(value)
//         }, ms);
//     })
// }
// const p1 = delay(3000,"Apple");
// const p2 = delay(1000,"Banana");
// const p3 = delay(5000,"Mango");

// Promise.all([
//   p1,p2,p3  
// ])
// .then(results=>{
//     console.log(results)
// })
// .catch(err=>{
//     console.error(err)
// })



// Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/users/1'),
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/todos/1'),
// ])
// .then(res=>{
//     return Promise.all(
//         res.map(res=>res.json())
//     );
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.error(err)
// })

async function getData(){
    try{
        const response=await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1'),
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
        ]);

// if(!response.ok) throw new Error("Error");
        const data=await Promise.all(
            response.map(res=>res.json())
        )
        console.log(data)
        
    }catch(err){
        console.error(err)
    }
}

getData()

// fetch()
//     ↓
// Promise<Response>
//     ↓ await
// Response
//     ↓ response.json()
// Promise<Data>
//     ↓ await
// JavaScript Object / Array