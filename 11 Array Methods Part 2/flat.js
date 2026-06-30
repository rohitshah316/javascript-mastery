//flat() it removes nesting from arrays and creates a single-level array
let arr=[1,2,[3,4,[9,10]],[5,6],7];
let res=arr.flat(2);
console.log(res);