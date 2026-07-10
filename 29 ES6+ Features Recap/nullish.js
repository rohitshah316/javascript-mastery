//?? this operator sovles a common problem with default values

// || problem.

// const age = 0;

// console.log(age || "Not provided");


// const age=0;
// console.log(age ?? "not provided")


// console.log(0??100);
// console.log(0 || 100);

// console.log(""??"Hello")
// console.log(""||"Hello")

// console.log(false??true);
// console.log(false||true);

// console.log(undefined??50)
// console.log(undefined||50)

const score = null;
const lives = 0;
const username = "";

console.log(score ?? 100);
console.log(lives ?? 3);
console.log(username ?? "Guest");

console.log(score || 100);
console.log(lives || 3);
console.log(username || "Guest");