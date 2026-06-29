// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// for(let i=2;i<=10;i+=2){
//     console.log(i);
// }

//odd number from 1 to 15
// for(let i=1;i<=15;i+=2){
//     console.log(i);
// }


//even numbers from 1 to 10
// for(let i=0;i<=10;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }



//only the numbers divisible by 3 from 1 to 20;
// for(let i=1;i<=20;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }



//for...of loop for loops over values
// const fruits=["Apple","Banana","Mango","Orange"];

// for(const fruit of fruits){
//     console.log(fruit)
// }



//array of five programming languages and print them using for...of loop
// const languages=["JS","Python","C++","Go"];
// for(const lang of languages){
//     console.log(lang);
// }


//for...in loop
//which loops over the keys(property name) of an object
// const student={
//     name:"alex",
//     age:20,
//     grade:"A"
// };

// for(const key in student){
//     console.log(key,student[key]);
// }


const car={
    brand:"Toyota",
    model:"Corolla",
    year:2026
};

for(const key in car){
    console.log(key,car[key])
}


// Loop	Used for
// for	Repeat a known number of times
// while	Repeat while a condition is true
// for...of	Loop through array values
// for...in	Loop through object keys