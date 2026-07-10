//shorthand assignment operators

// ||=, &&=,??=

//1. OR assignment (||=)
// let username="";
// // without
// // if(!username) username="guest";
// //with
// username||="guest"

// console.log(username)



//2. AND assignment
let isLoggedIn=true;

// if(isLoggedIn){
//     isLoggedIn="welcome";
// }

isLoggedIn &&="welcome"
console.log(isLoggedIn)