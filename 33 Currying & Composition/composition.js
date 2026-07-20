// // //what is function composition?
// // //function composition means combining small functions to build bigger functionality.


// // const mulBy3=(x)=>x*3;
// // const sub=(x)=>x-2;
// // const div=(x)=>x/4;

// // // const res=mulBy3(sub(div(8)))

// // function compose(...fns){
// //    return (x)=>{

// //     return fns.reduceRight((result,fn)=>{
// //         return fn(result);
// //     },x)


// //    }
// // }

// // const process=compose(mulBy3,sub,div)

// // console.log(process(9))



// function add(a){
//     return (b)=>{
//         return a+b;
//     }
// }

// const mul=(a)=>(b)=>a*b;


// const double=mul(2);
// const triple=mul(3);
// const add10=add(10);

// // console.log(double(3))
// // console.log(triple(5));
// // console.log(add10(3))


// // const compose=(...fns)=>{
// //     return (x)=>{
// //         return fns.reduceRight((result,fn)=>{
// //             return fn(result)
// //         },x)
// //     }
// // }

// const pipe=(...fns)=>{
//     return (x)=>{
//         return fns.reduce((result,fn)=>{
//             return fn(result)
//         },x)
//     }
// }
// const calculate=pipe(add10,double);

// console.log(calculate(5))



const addTax=(price)=>price*1.18;

const discount=(price)=>price*0.9;

const round=(price)=>Math.round(price);

const pipe=(...fns)=>{
    return (x)=>{
        return fns.reduce((result,fn)=>{
            return fn(result)
        },x)
    }
}

const finalPrice=pipe(addTax,discount,round)
console.log(finalPrice(1000))