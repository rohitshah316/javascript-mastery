// //design pattern

// //Pattern 1: Module Pattern

// // instead of this
// let notes=[];
// notes.push("Hello")
// notes.push("Alex")

// //instead
// const Notes=(function(){

// }())
// //the data stays private, only selected functions are public

// example
const Counter=(function(){
    let count=0;
    function increment(){
        count++;
    }
    function getCount(){
        return count;
    }
    
    return {
        increment,getCount
    }
})();

Counter.increment();
Counter.increment();
console.log(Counter.getCount())