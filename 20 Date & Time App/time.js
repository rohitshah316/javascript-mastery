// setTimeout and setIntveral control timing in JS

//setTimeout---> runs ONCE
// setTimeout(()=>{console.log("Hello after 2 seconds")},2000)



// //setInterval---> runs repeatedly

// setInterval(()=>{console.log("Repeats every 2 seconds")},2000)


//to stop setInterval we use clearInterval()

const id=setInterval(()=>{
    console.log("Running...");
},1000);


setTimeout(()=>{
    clearInterval(id);
    console.log("Stop")
},5000)