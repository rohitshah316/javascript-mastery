// // // //what is a set?
// // // //a set is a collection of unique values
// // // //unlike a map, a set stores values only, there are no keys

// // // // const numbers= new Set();

// // // // numbers.add(10)
// // // // numbers.add(10)
// // // // numbers.add(30)

// // // // console.log(numbers)

// // // // //it automatically removes duplicates

// // // const colors=new Set();

// // // colors.add("Red")
// // // colors.add("Blue")
// // // colors.add("Red")
// // // colors.add("Green")
// // // colors.add("Blue");

// // // console.log(colors);
// // // console.log(colors.size)


// // const fruits=new Set();

// // fruits.add("Apple")
// // fruits.add("Banana")
// // fruits.add("Mango");

// // console.log(fruits);
// // fruits.delete("Banana");
// // console.log(fruits)

// // fruits.clear();
// // console.log(fruits)


// const numbers=[1,2,3,3,5,1,3,5,6,6,3];
// const uniquenum=[...new Set(numbers)]
// console.log(uniquenum)


const lang=new Set();

lang.add("JS");
lang.add("Python");
lang.add("JS");
lang.add("Java");

console.log(lang);
console.log(lang.has("Python"))
lang.delete("Java");
console.log(lang)
console.log(lang.size)