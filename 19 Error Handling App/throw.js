//throw throw errors manually

// throw new Error("Something went wrong");


// try{
//     throw new Error("custom error");
// }catch(e){
//     console.log(e.message)
// }

//use of throw
//1. input is invalid
//2. rules are broken
//3. you want to stop execution manually


function checkAge(age){
    if(age<18){
        throw new Error("Too young");
    }
    return "Allowed";
}


try{
    console.log(checkAge(16))
}catch(err){
    console.log("Caught:",err.message)
}