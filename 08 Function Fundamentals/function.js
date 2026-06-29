
// function sayHi(){
//     console.log("Hi!");
//     console.log("Welcome to JavaScript");
// }

// sayHi();
// sayHi();
// sayHi();


//parameter 

// function greet(name){
//     console.log(`Hi ${name}`);
// }

// greet("Alex");
// greet("Ani");


// function introduce(name){
//     console.log(`Hello, my name is ${name}`)
// }

// introduce("Alex");
// introduce("Aniruddha");
// introduce("Prinsa");



//multiple parameter
// function createProfile(name,age,city){
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`City: ${city}`);
// }

// createProfile("Alex",20,"Lalitpur");



// function calculateTotal(price,quantity){
//     console.log(`Total: ${price*quantity}`);
// }

// calculateTotal(100,5);



// function calculateDiscount(price,discount){
//     let discountAmt=(discount/100)*price;
//     return price-discountAmt;
// }

// let finalPrice=calculateDiscount(1000,20);
// console.log(finalPrice);



// function createUser(name="Guest",role="User"){
//     console.log(`Name: ${name}`);
//     console.log(`Role: ${role}`);
// }

// createUser();
// createUser("Alex","Admin");


// const square=function(number){
//     return number*number;
// }

// console.log(square(5));

// const square=(number)=>{
//     return number*number;
// }

// console.log(square(5));


const isEven=(number)=>{
   return number%2===0;
}

console.log(isEven(4));
console.log(isEven(7));