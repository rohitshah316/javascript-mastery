let button=document.querySelector("#btn");
let heading=document.querySelector("#title");


// heading.innerText="Hello JavaScript"
// console.log(heading)

button.addEventListener("click",()=>{
    // heading.innerText="Button Clicked!";

    heading.classList.toggle("active")
})


// let box=document.querySelector("#box");
// box.innerHTML="<h2>This is dynamic content.</h2>"



// innerText treats everything as plain text, even if it looks like HTML.
// innerHTML parses the string and renders it as real HTML elements.