//apply() is almost identical to call()
//the only difference is how arguments are passed
// in apply() arguments are passed as an array

// syntax
//functionName.apply(thisArg,[arg1,arg2,arg3]);


const person={
    name:"Rohit"
};


function introduce(city,country){
    console.log(`${this.name} lives in ${city}, ${country}`)
}

//call
introduce.call(person,"Kathmandu","Nepal");

//apply
introduce.apply(person,["Kathmandu","Nepal"]);


//before the spread operator(...) became commn, apply() was very useful when you already had your arguments in an array
//the spread operator is generally the modern, preferred apporach