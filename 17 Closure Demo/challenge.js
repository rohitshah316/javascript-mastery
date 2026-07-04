// function outer(){
//     let x=5;

//     return function(){
//         x++;

//         console.log(x);
//     };
// };

// const a=outer();
// const b=outer();

// a();
// a();
// b();
// a();
// b();



function outer(){
    let count=0;

    return{
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        show(){
            console.log(count);
        }
    }
}

const obj=outer();

obj.increment();
obj.increment();
obj.decrement();
obj.show();