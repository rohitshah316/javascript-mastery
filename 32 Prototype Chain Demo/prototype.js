//prototype chain demo

// class Person{
//     constructor(name){
//         this.name=name;
//     }

//     introduce(){
//         return `Hi, I am ${this.name}`;
//     }
// }

// const p1=new Person("Alex");
// const p2=new Person("Ani");

// console.log(Person.prototype)

// console.log(p1.introduce===p2.introduce);

// console.log(p1.__proto__===Person.prototype)

// console.log(p1.hasOwnProperty("name"))
// console.log(p1.hasOwnProperty("introduce"))

// console.log(p1.name);
// console.log(p1.introduce)



// console.log(p1);
// console.log(p1.name)
// console.log(p1.introduce)

//every object in js has a hidden link to another object called its prototype

// p1
// │
// ├── name = "Alex"
// │
// └── prototype
//       │
//       └── introduce()

//the method isnt stored directly on p1. ist stored in the prototype object

//js does this: does p1 have introduce? no? check p1 prototype, found it, call that function. 
//this process is called prototyep lookup





//__proto__ (dunder proto)
//__proto__ is a property that gives access to an object prototype link
//it is an older way to access the protoype

//modern js prefers Object.getPrototypeOf(p1)

// class Person{
//     constructor(name){
//         this.name=name;
//     }
//     introduce(){
//         return `Hi, I am ${this.name}`
//     }
// }

// const p1=new Person("Alex");

// console.log(Object.getPrototypeOf(p1));
// console.log(Object.getPrototypeOf(p1)===Person.prototype);
// console.log(p1.__proto__===Person.prototype)

// class Person{
//     greet(){
//         return "hello";
//     }
// }
// class Student extends Person{

// }
// const s1=new Student();

// console.log(s1.greet());

// console.log(Student.prototype);
// console.log(Person.prototype);

// console.log(Student.prototype.__proto__===Person.prototype)


//classes didnot replace prototypes, they use prototypes internally
