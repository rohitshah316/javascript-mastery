//call() lets you manually set the value of this

//syntax functionName.call(thisValue)
//where functionName=>the function you want to execute
// thisValue=> the object that should become this

// const p1={
//     name:"Rohit"
// };

// const p2={
//     name:"Aniruddha"
// };

// function greet(){
//     console.log(`Hello ${this.name}`);
// }

// greet.call(p1);
// greet.call(p2);



//call() can also pass arguments to the function
// general syntax functionName.call(thisValue, arg1,arg2,arg3);


const person={
    name:"Rohit"
}

function introduce(city,country){
    console.log(`Hi, I am ${this.name} from ${city}, ${country}`)
}

introduce.call(person,"Kathmandu","Nepal");
