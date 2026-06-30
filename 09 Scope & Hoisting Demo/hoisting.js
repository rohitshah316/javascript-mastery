
// console.log(name);
// let name="Alex";

// let x=10;
// {
//     console.log(x);

//     let x=20;
//     console.log(x);
// }

// console.log(x);


// let a=5;
// function test(){
//     console.log(a);

//     if(true){
//         let a=10;
//         console.log(a);
//     }
//     console.log(a);
// }

// test();



// var a=1;

// function test(){
//     console.log(a);

//     var a=2;

//     console.log(a);
// }

// test();


var x=10;

function demo(){
    console.log(x);

    let x=20;
}

demo()


// Lexical Scope

// Definition: A function can access variables from its outer (parent) scope where it was written.

// let a = 10;
// function test() {
//   console.log(a); // 10
// }
// test();
//  Block Scope

// Definition: Variables declared with let or const exist only inside { } blocks.

// if (true) {
//   let x = 5;
// }
// console.log(x); // ReferenceError
//  Shadowing

// Definition: When a local variable has the same name as an outer variable and hides it.

// let a = 1;
// function test() {
//   let a = 2;
//   console.log(a); // 2
// }
// test();

//  Hoisting (var vs let)

// Definition: var is hoisted and initialized as undefined, but let is hoisted without initialization.

// console.log(a); // undefined
// var a = 5;

// console.log(b); // ReferenceError
// let b = 10;
//  TDZ (Temporal Dead Zone)

// Definition: The time between entering scope and variable declaration where let/const cannot be accessed.

// console.log(a); // ReferenceError
// let a = 5;