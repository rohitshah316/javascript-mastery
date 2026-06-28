let name="rohit";
console.log(name.toUpperCase());

let text="HELLO";
console.log(text.toLowerCase());


//string is immutable
let city="kathmandu";
city=city.toUpperCase();
console.log(city);


let lang="JavaScript";

console.log(lang.slice(0,4));
console.log(lang.slice(4));


let para="JavaScript is awesome";
console.log(para.includes("script"));
if(para.includes("Script")){
    console.log("Found keyword");
}


let rep="I like Frontend";

let newRep=rep.replace("Frontend","Backend");

console.log(rep);
console.log(newRep);


//template literal
let firstName="Rohit";
let lastName="Shah";
let age=20;

console.log("My name is "+firstName+" "+lastName+". And I am "+ age+" years old."); //hard to read, easy to make mistakes

//template literal `` use of backticks make it easy
console.log(`My name is ${firstName} ${lastName}. And I am ${age} years old. `);