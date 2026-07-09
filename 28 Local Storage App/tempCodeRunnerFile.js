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


//setItem() to save data in the browser
localStorage.setItem("name","Alex")

//"name":"Alex"


//getItem() to read saved data.
//syntax localStorage.getItem(key);

//it takes one argument

const name = localStorage.getItem("name");

console.log(name);




