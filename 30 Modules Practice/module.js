//modules use two keywords
//export=>makes somethign available to other files
//import=>get somethign from another file


//Named export
//import { name, greet } from "./user.js";
//the curly braces {} are required for named exports


//default export
//user a default exprot when the file has one primary value or function

//math.js
//export default function add(a,b){ return a+b}

//import it without curly braces:
//import add from './math.js


// | Feature                     | Named Export             | Default Export      |
// | --------------------------- | ------------------------ | ------------------- |
// | Curly braces needed?        | ✅ Yes                    | ❌ No                |
// | Can have multiple?          | ✅ Yes                    | ❌ Only one per file |
// | Import name can be changed? | ❌ No (unless using `as`) | ✅ Yes               |


//import aliases
//sometimes ou want to rename an imported value when the current file already has same variable name

//const name="rohit"

//import {name} from './user.js'  //gives error

//solution:as
//import {name as userName} from './user.js'
//console.log(userName);




//import * as
//import * as MathUtils from "./math.js";

// console.log(MathUtils.PI);

// console.log(MathUtils.add(5, 3));

// console.log(MathUtils.subtract(10, 4));

// console.log(MathUtils.multiply(6, 7));