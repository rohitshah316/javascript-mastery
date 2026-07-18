

// getter
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value){
        const [first,last]=value.split(" ");

        this.firstName=first;
        this.lastName=last;
    }
}

const p=new Person("Alex","Shrestha");

console.log(p.fullName)
p.fullName="Ani Rai";
console.log(p.fullName)

//a getter lets you read a cmputed value like a property
//a setter lets you control what happends when someone assign a values