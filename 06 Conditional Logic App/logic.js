
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

console.log("Exam finished");

let age = 20;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote yet.");
}


let username="rohit";
let password="1234";

if(username==='rohit' && password==='1234'){
    console.log("Login successful");
}else{
    console.log("Invalid credential")
}



let num=20;
let result=num>=18?'adult':'kid'; //ternary operator

console.log(result);



let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;

    case "Friday":
        console.log("Weekend is near");
        break;

    case "Sunday":
        console.log("Holiday");
        break;

    default:
        console.log("Regular day");
}