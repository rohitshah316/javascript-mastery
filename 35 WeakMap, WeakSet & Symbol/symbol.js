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
//it first check if a global symbol with the key already exist?
//if yes, it returns the existing symbol
//if no, it creates one and stores it in the global symbol registry

const a=Symbol("hello");
const b=Symbol.for("hello");
const c=Symbol.for("hello");
console.log(a===b)
console.log(b===c)



// ✅ Map
// set()
// get()
// has()
// delete()
// clear()
// size
// Any data type can be used as a key.
// ✅ Set
// Stores only unique values.
// add()
// has()
// delete()
// clear()
// size
// A common use is removing duplicates from arrays.
// ✅ WeakMap
// Only objects can be keys.
// Entries are held weakly, allowing garbage collection.
// Supports set(), get(), has(), and delete().
// No iteration or size.
// ✅ WeakSet
// Only stores objects.
// Supports add(), has(), and delete().
// No iteration or size.
// ✅ Symbol
// A primitive type.
// Every call to Symbol() creates a unique value.
// Great for unique object property keys.
// Symbol.for() uses the global symbol registry.