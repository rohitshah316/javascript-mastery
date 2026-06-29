//task1: print number from 1 to 20, if number is even print even if odd then odd

// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(`${i} is even`);
//     }else{
//         console.log(`${i} is odd`);
//     }
// }


//task 2: count down from 10 to 1
//after the loop finsihes print: blast off
// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
    
// }
// console.log("blast off");



//task 3: for...of

// const fruits=["Apple","Banana","Mango","Orange"];

// for(const fruit of fruits){
//     console.log(`I like ${fruit}.`)
// }




//task 4: for...in
// const student={
//     name:'alex',
//     age:20,
//     grade:"A",
//     city:"lalitpur"
// }

// for(const key in student){
//     console.log(`${key}:${student[key]}`);
// }



//task 5: pattern
for(let i=0;i<=5;i++){
    let row="";
    for(let j=0;j<i;j++){
        row+="*";
    }
    console.log(row);
}