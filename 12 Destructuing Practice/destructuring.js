//destructuring extract valeus from an array into variables in a clean way.

// let numbers=[10,20,30];

// let [a,b,c]=numbers;
// // let [a,,c]=numbers; //skip values
// console.log(a,b,c);



//swap variables
// let x=10;
// let y=20;

// [x,y]=[y,x];
// console.log(x,y);


let arr=[5,10,15,20];
let [a,b,,d]=arr;
console.log(a,b,d);
