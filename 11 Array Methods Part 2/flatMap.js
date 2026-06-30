//flatMap() maps each element, then flattesn one level automatically


// let arr=[1,2,3];

// let result=arr.flatMap(n=>[n,n*2]);
// console.log(result)


let arr=[1,2,3];
let result=arr.flatMap(n=>[[n],n*10]);
console.log(result)