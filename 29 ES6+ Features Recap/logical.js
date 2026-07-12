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
// let isLoggedIn=true;

// // if(isLoggedIn){
// //     isLoggedIn="welcome";
// // }

// isLoggedIn &&="welcome"
// console.log(isLoggedIn)



//nullish assignment ??=
//this is tthe safest assignment operator because it only assigns a value when the variable is:
//null, undefined
//it doesnt replace: 0,false,""


// let age=null;
// age??=18;
// console.log(age);

let age=0;
age??=18;
console.log(age)