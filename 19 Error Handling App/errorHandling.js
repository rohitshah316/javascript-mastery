//why error handling exists?
//JS code can fail at runtime

// const user=JSON.parse('{"name":"Rohit"}');
// console.log(user.name); 
//this works

// const user=JSON.parse("invalid JSON");
// console.log(user.name);
// this throws an error and stops the program


//problem without error handling
//1. app stops immediately
//2. nothing after it runs

//try...catch to prevent crashes

try{
    const user=JSON.parse("invalid JSON");
console.log(user.name);
}catch(e){
    console.log("something went wrong:",e.message)
}



//try block: runs the risky code
//catch bolock: if anything fails, run this instead

// structure

// try{
//     //risky code
// }catch(error){
//     //fallback code
// }



//finally block
//runs always whether error happens or not

try{
    console.log("Trying...")

    JSON.parse("{bad json}");
    console.log("end")
}catch(err){
    console.log("Error!");
}finally{
    console.log("Always runs")
}