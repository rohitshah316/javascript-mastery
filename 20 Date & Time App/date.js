//js has a built-in object called: Date
//it gives you current date and time


// console.log(now);

//the time depends on system/timezone

//you can break it into pieces:

// console.log(now.getFullYear())
// console.log(now.getMonth()+1)
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

setInterval(()=>{
    const now=new Date();
    // const time=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

    const hours=String(now.getHours()).padStart(2,"0");
    const minutes=String(now.getMinutes()).padStart(2,"0");
    const seconds=String(now.getSeconds()).padStart(2,"0");
console.log(`${hours}:${minutes}:${seconds}`);
},1000)