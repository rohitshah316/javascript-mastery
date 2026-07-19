// //what is currying?
// //currying is the process of converting a function that takes multiple arguments into a sequence of functions that each take one arguments


// //normal function
// // function add(a,b){
// //     return a+b;
// // }
// // console.log(add(5,3))


// //curried version
// function add(a){
//     return function (b){
//         return a+b;
//     }
// }

// console.log(add(5)(5))


// //why do we use currying?
// //it lets you create specialized functions from a more general one

// function power(a){
//     return function(b){
//         return a**b;
//     }
// }

// const square=power(2);
// console.log((square(3)))
// console.log((square(5)))

// function add(a){
//     return function(b){
//         return a+b;
//     }
// }

// const addT=add(10);

// console.log(addT(5));
// console.log(addT(20));
// console.log(addT(100));


// function multiply(a){
//     return function(b){
//         return a*b;
//     }
// }

// const triple=multiply(3);
// const quadruple=multiply(4);

// console.log(triple(5));
// console.log(quadruple(5));
// console.log(triple(10));



//currying with arrow functions
// const add=(a)=>{
//     return (b)=>{
//         return a+b;
//     }
// }

//one line
// const add=(a)=> (b)=>a+b;

// const addFive=add(5);

// console.log(addFive(10));


const power=(a)=>(b)=>b**a;

const square=power(2);
const cube=power(3);

console.log(square(5))
console.log(square(8))

console.log(cube(2))
console.log(cube(4))