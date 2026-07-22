// // //Regex(Regular Expression) is a pattern used to search,mathc, or replace text.

// // //its like a text detective. You give it a rule, and it checks whether some text follows that rule.

// // //creating a regex: two ways
// // //method 1: regex literal
// // // const pattern=/hello/

// // // /  / symbols tell js its a regular expression


// // //method 2: using the RegExp Constructor
// // // const pattern= new RegExp("hello")

// // //test() method: it check does the string contain a match or not

// // // const pattern=/hello/
// // // console.log(pattern.test("hello world"))

// // //regex is case sensitive
// // //to make it insensitive we use flags
// // const pattern=/hello/i;  //i means ignore case
// // console.log(pattern.test("Hello world"))


// // // Flag	Meaning
// // // i	ignore case
// // // g	global search
// // // m	multiline

// // const regex=/javascript/i;
// // console.log(regex.test("I am learning JavaScript"));
// // console.log(regex.test("I am learning python"))
// // console.log(regex.test("javascript"))



// //Character Matching with []
// //match one character from a list
// // const regex=/[aeiou]/
// // console.log(regex.test("crt"))
// // console.log(regex.test("cat"))


// //Character Range
// //   /[0-9]/
// //   /[a-z]/
// //   /[A-Z]/
// //   /[A-Za-z]/

// // const regex=/[0-9]/

// // console.log(regex.test("hello"))
// // console.log(regex.test("hello5"))
// // console.log(regex.test("123"))

// //Negated Character Sets [^]
// //match any chracter except. example: [^abc] means match any char except a,b, or c.
// // ^ inside [] means NOT

// // const regex=/[^0-9]/
// // console.log(regex.test("1234a"))
// // console.log(regex.test("alex"))


// //Quantifiers
// //+ One or More character
// //* Zero or More
// //? Zero or One
// //{} Exact Amount  eg: /[0-9]{3}/ means exact 3 digit



// //Anchors (^ and $)

// // /^[0-9]+$/
// //^ means start
// //[0-9]+ means one or more digit
// //$ means end
// //together: the entire string must contain only digits


// //Example: Checking a PIN of 4digit
// const pinPattern=/^[0-9]{4}$/
// console.log(pinPattern.test("1234"))

// const regex = /^[0-9]+$/;

// console.log(regex.test("12345"));
// console.log(regex.test("123abc"));
// console.log(regex.test("abc123"));
// console.log(regex.test("123 456"));




//Groups () and OR |
//OR
// const regex=/cat|dog/
// console.log(regex.test("I have a cat"))


//() groups
// /Mr(s)?\.John/



//Shorthand Character Classes
//  \d any digit  /\d/
// \D any non digit
// \w word character
// \W non word character
// \s whitespace
// \S non-whitespace


// Shorthand	Meaning	Equivalent
// \d	Digit	[0-9]
// \D	Non-digit	[^0-9]
// \w	Word character	[A-Za-z0-9_]
// \W	Non-word character	[^A-Za-z0-9_]
// \s	Whitespace	Space, tab, newline
// \S	Non-whitespace	Anything except whitespace




// match()  syntax: string.match(regex)
//test() syntax: regex.test(string)


// const str="Age: 21";
// console.log(str.match(/\d/g))


// test()	match()
// Returns true or false	Returns the matched text (or matches)
// Used to check if a pattern exists	Used to extract matching text
// Syntax: regex.test(str)	Syntax: str.match(regex)


const str = "JS123Python456";

console.log(/\d/.test(str));

console.log(str.match(/\d/));

console.log(str.match(/\d/g));
