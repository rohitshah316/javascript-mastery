// //what is map?
// //a map is a special object user to store key-value pairs.


// //obj
// // const person={
// //     name:"Alex",
// //     age:20
// // }
// // console.log(person.name)

// //map does the same thing but is more powerful
// const person= new Map();

// person.set("name","Alex");
// person.set("age",20);
// console.log(person)

// person.set("age",21);
// console.log(person.delete("age"))
// console.log(person)
// console.log(person.size)

// //(=>) this is how maps display key-value pairs

//why use map instead of object
//object only allow strings (and symbols) as keys
//Maps allow any data type as a key

//example
// const map=new Map();
// map.set(1,"One");
// map.set(true,"Yes");



//practice challenge
const person=new Map();

person.set("name","Alex");
person.set("age",20);
person.set("country","Nepal");

console.log(person.get("country"));
person.set("age",26);
console.log(person.has("name"));
person.delete("country")
console.log(person)
console.log(person.size)