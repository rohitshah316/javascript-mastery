let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let op = prompt("Enter operation(+,-,*,/):");


let num1 = Number(a);
let num2 = Number(b);
let result;

if (op === "+") {
    result = num1 + num2;
} else if (op === "-") {
    result = num1 - num2;
} else if (op === "*") {
    result = num1 * num2;
} else if (op === "/") {
    result = num1 / num2;
} else {
    result = "invalid operation";
}


alert("Result: "+result);