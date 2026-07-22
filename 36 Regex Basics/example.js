//username validation
// a username must contain only letters and numbers, at least 3 char, at most 10 char, no space, no special char

// const username=/^[A-Za-z0-9_]{3,10}$/
// console.log(username.test("alex@"))




//PIN Validator
//rule: 4 digit, no letter, no space, no special char

// const PIN=/^\d{4}$/
// console.log(PIN.test("145 3"))



//Email Validator
//email structure: username@domain.com

// const email=/[A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-Za-z]+$/
// console.log(email.test("rohit.shah@gmail.com"))



//Password Validator
//rules: at least 8 char, at least one uppercase letter, at least one lowerase letter, at least one digit

// const password=/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
// console.log(password.test("12rotrot12"))



//replace()-> changes something

//syntax: string.replace(regex,replacement)

// const text="I love JS";
// const result=text.replace(/JS/,"JavaScript");
// console.log(result)


//hide phone number 

// const phone="9876767676"
// const hidden=phone.replace(/\d(?=.*\d{4})/g,"*")
// console.log(hidden)



//capturing groups ()
// const text="Alex Shrestha";
// const regex=/(\w+) (\w+)/
// const result=text.replace(regex,"$2 $1")
// console.log(result)

// const text = "I have 25 books and 3 pens";

// const result = text.match(/\d+/g);

// console.log(result);



// =======================================
// REGEX TOOLKIT PROJECT
// =======================================


// 1. Extract Numbers
// ------------------

const text = "I bought 25 apples and 3 oranges. Total cost is 500.";

const numbers = text.match(/\d+/g);

console.log("Numbers found:");
console.log(numbers);


// =======================================
// 2. Extract Emails
// =======================================

const message = `
Contact us at alex@gmail.com
or john123@yahoo.com
`;

const emails = message.match(
  /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/g
);

console.log("\nEmails found:");
console.log(emails);


// =======================================
// 3. Remove Extra Spaces
// =======================================

const messyText = "Hello      JavaScript     Regex";

const cleanText = messyText.replace(/\s+/g, " ");

console.log("\nClean text:");
console.log(cleanText);


// =======================================
// 4. Hide Phone Number
// =======================================

const phone = "9876543210";

const hiddenPhone = phone.replace(
  /\d(?=\d{4})/g,
  "*"
);

console.log("\nHidden phone:");
console.log(hiddenPhone);


// =======================================
// 5. Username Validator
// =======================================

const usernameRegex = /^[A-Za-z0-9]{3,10}$/;

const usernames = [
  "Alex",
  "john123",
  "ab",
  "john@123"
];

console.log("\nUsername validation:");

usernames.forEach(username => {
  console.log(
    username,
    usernameRegex.test(username)
  );
});


// =======================================
// 6. Password Validator
// =======================================

const passwordRegex =
/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;


const passwords = [
  "Password1",
  "password1",
  "PASSWORD1",
  "Pass123",
  "JavaScript2026",
  "Pass@123"
];


console.log("\nPassword validation:");

passwords.forEach(password => {

  console.log(
    password,
    passwordRegex.test(password)
  );

});
