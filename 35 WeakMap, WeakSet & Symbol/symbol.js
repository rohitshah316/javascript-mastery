// //what is a Symbol?
// //A Symbol is a primitive data type (just like string,number, boolean,null, undefined, and bigint)

// //its special feature is: every symbol is unqiue

// // const id=Symbol("user");
// // console.log(id)

// // const s1=Symbol("test")
// // const s2=Symbol("test")
// // console.log(s1==s2)


// const secret=Symbol("secret");
// const person={
//     name:"Alex"
// }

// person[secret]="I Love Python.";

// console.log(person.name);
// console.log(person.secret);
// console.log(person[secret])



//js provides a global symbol registry
//to use it call
// Symbol.for()


const a=Symbol("hello");
const b=Symbol.for("hello");
const c=Symbol.for("hello");
console.log(a===b)
console.log(b===c)