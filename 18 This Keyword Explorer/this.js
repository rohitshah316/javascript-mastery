// this keyword is a special varialbe that refers to the object that is executing the current function


// const person={
//     name:"rohit",

//     greet(){
//         console.log(this);
//     }
// }

// person.greet();

// const sayHello=person;

// sayHello.greet();



// here person.greet()----> console.log(this) -----> console.log(person)
// for a regular method(a function insdie an object) this refers to the object before the dot .



const user={
    name:"Rohit",

    greet(){
        console.log(this.name);
    }
};

const admin={
    name:"Admin",
    greet: user.greet
};

admin.greet();