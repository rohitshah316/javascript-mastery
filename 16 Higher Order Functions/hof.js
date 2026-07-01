//Higher order function
// a function that does at least one of these:
// 1. accepts another function as an argument
// 2. returns another function


// function greet(){
//     console.log("hello!");
// }

// function execute(func){
//     func();
// }

// execute(greet)





// function sayBye(){
//     console.log("bye");
// }

// function run(task){
//     console.log("Starting...");
//     task();
//     console.log("Finished");
// }
// run(sayBye);




// a callback function is simply a function that is passed to another function so it can be called later
// function greet(name){
//     console.log("Hello "+name);
// }

// function processUser(callback){
//     const user="Rohit";
//     callback(user);
// }


// processUser(greet);




function add10(num){
    console.log(num+10);
}

function double(num){
    console.log(num*2);
}

function square(num){
    console.log(num*num);
}

function calculate(v,operation){
    operation(v);
}

calculate(5,add10);
calculate(5,double);
calculate(5,square);