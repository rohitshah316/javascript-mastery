// //what is OOP?
// //oop solution create a blueprint and create as many object as you want

// //without class
// const person1={
//     name:"rohit",
//     age: 21,
//     introduce(){
//         console.log("hi");
//     }
// };

// const person2={
//     name:"alex",
//     age: 20,
//     introduce(){
//         console.log("hi");
//     }
// };




//with classes
// class Person{

// }
//this creates a blueprint
//now we can create unlimites people from it

// class - blueprint
//object - an actual thing created from the calss
//const ram= new Person()

//instance: another name for an object created from a class. 
//const alex=new Person();   //alex is instance of Person

//why use classes?
//without class: repeated code, hard to maintain, difficult to update
//with class: resuable, cleaner, asider to organize, better for large applications


// class Dog{

// }

// const d1=new Dog();
// const d2=new Dog();

// console.log(d1)
// console.log(d2)

//each dog is separate even though they come from same class



// class Car{

// }

// const car1=new Car();
// const car2=new Car();
// const car3=new Car();

// console.log(car1)
// console.log(car2)
// console.log(car3)



//before es6 js used constructor functions
//es6 introduced classes, which make object-orinted code easier to read


//why use new?
//it creates a new empty obj, links to the class prototype, calls the constructor , returns the new boject



// class Person{

// }

// const person1=new Person()
// const person2=new Person()
// const person3=new Person()

// console.log(person1)
// console.log(person2)
// console.log(person3)


//the constructor
//a constructor is a special method that runs automatically eery time you create a new obj with 'new'.

// class Person{
//     constructor(){
//         console.log("A new person was created")
//     }
// }
// const person1=new Person()

//main purpose
//to initialize an object with data


// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// const p1=new Person("Alex",20);
// const p2=new Person("Ani",20);
// const p3=new Person("Rohit",21);
// console.log(p1)
// console.log(p2)
// console.log(p3)

//instance methods
//object should also perform actions. those actions are called methods

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     introduce(){
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }


// const p1=new Person("Alex",20);
// const p2=new Person("Ani",20);
// const p3=new Person("Rohit",21);
// p1.introduce();
// p2.introduce();
// p3.introduce();



//updating object state with methods

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
    birthday(){
        this.age++;
    }
}


const p1=new Person("Alex",20);
const p2=new Person("Ani",20);
const p3=new Person("Rohit",21);
p1.introduce();
p1.birthday();
p1.birthday();
p1.introduce()
