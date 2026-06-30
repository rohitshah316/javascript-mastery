//some() returns true if at least one element matches the condition

let nums=[1,2,3,4];
let result=nums.some(n=>n>3);
console.log(result);


//every() returns true if all elements match the condition
let result2=nums.every(n=>n%2===0);
console.log(result2);