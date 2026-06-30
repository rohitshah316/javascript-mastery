//sort() sorts array elements(by default as strings, not numbers)


let fruits=["banana","apple","mango"];
fruits.sort();
console.log(fruits);


// let numbers=[10,2,30,4];
// numbers.sort();
// console.log(numbers)

let numbers=[10,2,30,4];
numbers.sort((a,b)=>{
    return a-b;
});

console.log(numbers);