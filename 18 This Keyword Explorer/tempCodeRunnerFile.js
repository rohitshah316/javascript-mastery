// this keyword is a special varialbe that refers to the object that is executing the current function


const person={
    name:"rohit",

    greet(){
        console.log(this.name);
    }
}

person.greet();