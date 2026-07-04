//bind() does not execute the function
//instead it returns a new function with this permanently set

const person={
    name:"Rohit"
};

function greet(){
    console.log(`Hello, ${this.name}`);
}

const greetRohit=greet.bind(person);

// console.log(greetRohit);
greetRohit()