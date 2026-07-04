

//regular function
// const person={
//     name:"Rohit",
//     greet(){
//         console.log(this.name);
//     }
// };

// person.greet();


//arrow function
// const person={
//     name:"Rohit",
//     greet:()=>{
//         console.log(this.name);
//     }
// };

// person.greet();



const user={
    name:"Rohit",
    show(){
        const arrow=()=>{
            console.log(this.name);
        };


        arrow();
    }
}

user.show();