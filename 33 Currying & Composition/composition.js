//what is function composition?
//function composition means combining small functions to build bigger functionality.


const mulBy3=(x)=>x*3;
const sub=(x)=>x-2;
const div=(x)=>x/4;

const res=compose(mulBy3,sub,div)

console.log(res)