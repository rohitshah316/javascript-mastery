//closure is preserved realtionsip between the function and its surrounding variables.

//a closure is a function that remembers the varialbes from the place where it was created, even after the outer fucntion has finished executing

// function outer(){
//     let message="Hello";

//     function inner(){
//         console.log(message)
//     }

//     return inner;
// }

// const greet=outer();
// greet();



// function outer(){
//     let count=0;

//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// const c1=outer();
// const c2=outer();

// c1();
// c1();
// c2()
// c1()
// c2();


function outer(){
    let x=10;

    return function(){
        x++;
        return function(){
            console.log(x);
        }
    }
}

const first=outer();
const second=first();
second();
first();
second();
first();