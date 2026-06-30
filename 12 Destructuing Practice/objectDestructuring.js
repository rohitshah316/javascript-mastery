// extracts values from objects into variables using keys

// let user={
//     name:"Rohit",
//     age:21
// };

// let{name:username,age}=user;
// console.log(username,age);


let user={
    name:"Alex",
    age:20,
    address:{
        city:"Kathmandu",
        country:"Nepal"
    }
};

let {name,address:{city}}=user;
console.log(name);
console.log(city);