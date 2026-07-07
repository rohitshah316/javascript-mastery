//get /users means please send me the list of users


//a POST request means: I am sending you some new data
// | GET                     | POST                        |
// | ----------------------- | --------------------------- |
// | Retrieves data          | Sends data                  |
// | Usually no request body | Includes a request body     |
// | Used for reading        | Used for creating resources |



// const newUser={
//     name:"Rohit",
//     email:"email@gmail.com"
// };

// console.log(newUser);
// console.log(typeof newUser);


// const jsonUser=JSON.stringify(newUser); //it converts JS object to JSON text

// console.log(jsonUser);
// console.log(typeof jsonUser)

// async function createUser(){
//     try{
//         const newUser={
//             name:"rohit",
//             email:"email@gmail.com"
//         }
//         const response=await fetch('https://jsonplaceholder.typicode.com/users',{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(newUser)
//         })

//         const data=await response.json();
//         console.log(data);
//     }catch(err){
//         console.error(err)
//     }
// }

// createUser()


//without the header, the server may not know that the request body contains JSON. Some servers will ignore the body or fail to parse it correctly
//Content-Type is like labeling a package. It tells the server the data I am sending is JSON, then server can parse it correctly


// | Method             | Direction   | Purpose                         |
// | ------------------ | ----------- | ------------------------------- |
// | `JSON.stringify()` | JS → Server | Convert JS object → JSON string |
// | `response.json()`  | Server → JS | Convert JSON string → JS object |


// Sending:
// Object ──JSON.stringify()──► JSON text ──► Server

// Receiving:
// Server ──► JSON text ──response.json()──► JavaScript object


async function createPost(){
    try{
        const newPost={
            title:"Learning fetch",
            body:"POST requests are fun!",
            userId:1
        }
        const res=await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(newPost)
                
            }
        )


        if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
}
        
        const data=await res.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

createPost()