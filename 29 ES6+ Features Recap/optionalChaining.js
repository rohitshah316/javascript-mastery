// //optional chaining

// const user={
//     name:"rohit",
//     address:{
//         city:"lalitpur"
//     }
// }

// console.log(user.name);
// console.log(user.address.city);
// // console.log(user.job.title)  //typeerror: cannot read properties of undefined

// //optional chaining
// console.log(user.job?.title)  //if job exists, read title, else return undefined

// const person={
//     profile:{
//         address:{
//             city:"lalitpur"
//         }
//     }
// }

// console.log(person.profile?.address?.city);


// optional chaining with array
// const fruits=["apple","banana"];

// console.log(fruits?.[10])

//with functions
// const user={
//     greet(){
//         console.log("hello")
//     }
// }

// user.greet?.()

const user = {
  profile: null
};

console.log(user.profile?.name);