//forEach() runs a function for each item in an array
//it doesnt return new array. It is used for printing, logging, side effects.

// let numbers=[1,2,3];

// numbers.forEach((num)=>{
//     console.log(num);
// })

// let fruits=["apple","banana","mango"];

// fruits.forEach((item)=>{
//     console.log(item.toUpperCase());
// })





// map() it transforms each element and returns a new array

// let numbers=[1,2,3];
// let doubled=numbers.map((num)=>{
//     return num*2;
// })

// console.log(doubled);



// filter() creates a new array with only items that pass a condittion

// let numbers=[1,2,3,4,5];

// let even=numbers.filter((n)=>{
//     return n%2===0;
// })
// console.log(even);




//find() returns the first elemen tthat matches the condition
// let numbers=[5,12,8,130,44];
// let found=numbers.find((n)=>{
//     return n>150
// })
// console.log(found);




//reduce() combines all elements into single value
// let numbers=[1,2,3,4];
// let sum=numbers.reduce((acc,current)=>{
//     return acc+current;
// });

// console.log(sum);
