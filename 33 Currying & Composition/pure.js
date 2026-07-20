// // // //a pure function has two rules:
// // // //rule1: same input---> same output
// // // //rule2: no side effects

// // // //rule 1:
// // // const square=(x)=>x*x;
// // // console.log(square(5))  //pure 

// // // let tax=10;
// // // const price=(x)=>x+tax;  //not pure cause changing tax changes the output


// // // //rule 2:
// // // //  no side effects

// // const add=(a,b)=>a+b;  //pure cause doesnt modify anything outside

// // let total=0;
// // function add(price){
// //     total+=price;
// // }

// // //not pure cause it changes external state




// // const discount=(price)=>price*0.9;
// // const addTax=(price)=>price*1.18;
// // const formatPrice=(price)=>`Rs.${price.toFixed(2)}`

// // const pipe=(...fns)=>{
// //     return (x)=>{
// //         return fns.reduce((res,fn)=>{
// //             return fn(res)
// //         },x)
// //     }
// // }

// // const calculateTotal=pipe(discount,addTax,formatPrice);

// // console.log(calculateTotal(1000))




// const discount=(percent)=>{
//     return (price)=>{
//         return price-(price*percent/100);
//     }
// }

// const dis20=discount(20);

// console.log(dis20(1000))


// const addTax=(price)=>price*1.18;
// const formatPrice=(price)=>`Rs.${price.toFixed(2)}`

// const pipe=(...fns)=>{
//     return (x)=>{
//         return fns.reduce((res,fn)=>{
//             return fn(res)
//         },x)
//     }
// }

// const calculateTotal=pipe(dis20,addTax,formatPrice);

// console.log(calculateTotal(1000))



// const numbers=[1,2,3,4,5];

// const mul=(a)=>(b)=>a*b;


// const doubleNum=(x)=>{
//    return x*2;
// }

// const double=numbers.map(x=>doubleNum(x));
// const filter=double.filter(x=>x>5);
// const add=filter.reduce((sum,num)=>sum+num,0)
// console.log(numbers)
// console.log(double)
// console.log(filter)
// console.log(add)

const numbers=[1,2,3,4,5];


const double=(arr)=>{return arr.map(x=>x*2)}
const filterBig=(arr)=>{
    return arr.filter(x=>x>5);
}
const add=(arr)=>{
    return arr.reduce((sum,num)=>{
       return sum+num
    },0)
}

const pipe=(...fns)=>{
    return (x)=>{
        return fns.reduce((result,fn)=>{
            return fn(result)
        },x)
    }
}

const calculate=pipe(double,filterBig,add)

console.log(calculate(numbers))