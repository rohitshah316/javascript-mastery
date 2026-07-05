//synchronous 

// console.log("Start");
// console.log("Middle");
// console.log("End")



// function getUser(){
//     setTimeout(() => {
//         console.log("User downloaded")
//     }, 2000);
// }


// function getPosts(){
//     setTimeout(() => {
//         console.log("Posts downloaded")
//     }, 1500);
// }


// function getComments(){
//     setTimeout(() => {
//         console.log("Comments downloaded")
//     }, 1000);
// }

// getUser();
// getPosts();
// getComments();

// a callback function is a function passed into another function as an argument, which is then executed inside that outer function to complete an action
function getUser(callback){
    setTimeout(() => {
        console.log("user downloaded");

        callback({
            id:1,
            name:"Rohit"
        })

    }, 2000);
}

function getPosts(userId,callback){
    setTimeout(() => {
        console.log("posts downloaded");

        callback([
            {id:101,title:"post 1"},
            {id:102,title:"post 2"},
            {id:103,title:"post 3"},
            
        ])
    }, 1500);
}

function getComments(postId,callback){
    setTimeout(() => {
        console.log("comments downloaded");

        callback([
            "Nice!","Great post!","Awesome"
        ])
    }, 1000);
}

getUser((user)=>{
    console.log(user);
    getPosts(user.id,(posts)=>{
        console.log(posts);

        getComments(posts[0].id,((comment)=>{
            console.log(comment)
        }))
    })
})


// the nesting is called callback hell also known as the pyramid of doom
//it is called callback hell because: the becomes hard to read, debug, handle errors, and maintain

// getUser()
//  └── getPosts()
//       └── getComments()
//            └── getReplies()
//                 └── getLikes()
//                      └── getNotifications()
//                           └─ ...  

//the indentation keeps growing, making the code difficult to follow 

//callback hell is a situation where multiple asynchronous operations depend on each other, causing allbacks to be nested inside other callbacks repeatedly. This creates deeply indented code that is difficult to read, debug, and maintain.

