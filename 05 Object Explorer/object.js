
let person={
    name:'Rohit',
    age:20,
    city:'Lalitpur',
    isStudent:true,
};

//accessng object properties
//dot notation
console.log(person.name);
console.log(person.age);
console.log(person.city)
console.log(person.isStudent);

//bracket notation
console.log(person['name']);
console.log(person['age']);
console.log(person['city']);
console.log(person['isStudent']);


let book={
    title:'biography',
    author:'rohit',
    pages:204
}

book.pages=500; //changing or updating an existing property

book['title']='rohit bio'
let key='pages';
console.log(book.title);      // Dot notation
console.log(book["author"]);  // Bracket notation
console.log(book[key]);



//nested object
let student={
    name:'rohit',
    age:20,
    address:{
        city:'Lalitpur',
        country:'Nepal'
    },
    hobbies:["coding","playing guitar","sleeping"],  //object+array
}
console.log(student.address);
console.log(student.address.city);
console.log(student.hobbies);
console.log(student.hobbies[5]);


