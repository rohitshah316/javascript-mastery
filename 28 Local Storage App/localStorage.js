//what is local Storage?
//Local storage is a built-in browser feature that stores data as key-value pairs and keeps it even after the page is refreshed or the browser is closed.

// Browser
// │
// ├── HTML
// ├── CSS
// ├── JavaScript
// └── Local Storage


//local storage belongs to the browser.

//data survives page refresh, closing, and reopening the browser
//data is stoerd as key-value pairs
//it is built into modern browsers
//it is not database
//it is not shared between different websites


//syntax
//localStorage.setItem(key,value);

// | Argument | Meaning                      |
// | -------- | ---------------------------- |
// | `key`    | The name (label) of the data |
// | `value`  | The data you want to store   |


//setItem() to save data or writes data in the browser
localStorage.setItem("name","Alex")

//"name":"Alex"


//getItem() to read saved data.
//syntax localStorage.getItem(key);

//it takes one argument

const name = localStorage.getItem("name");

console.log(name);



//removeItem() delete one item
//sytnax
//localStorage.removeItem(key)
//it takes one argument 


//sometimes you want to erase everything
//localStorage.clear() //no args, no key name


// | Method                | Purpose          |
// | --------------------- | ---------------- |
// | `setItem(key, value)` | Save data        |
// | `getItem(key)`        | Read data        |
// | `removeItem(key)`     | Delete one item  |
// | `clear()`             | Delete all items |




//local storage only stores strings
//it only understand strings

//js has a format called JSON(JavaScript Object Notation). which convers JS object/array to string and back string to js object/array
//using two methods
// 1. JSON.stringify()  -> js-value->string
// 2. JSON.parse() ->string->js-value



const todos = [
    "Learn JS",
    "Build App"
];

const savedTodos = JSON.stringify(todos);

console.log(savedTodos);

localStorage.setItem("todos",savedTodos)


//getting it back
const data=localStorage.getItem("todos");

const tododata=JSON.parse(data); //restores an array



