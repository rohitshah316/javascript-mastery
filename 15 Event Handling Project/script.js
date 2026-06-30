
const form=document.querySelector("#todo-form");
const input=document.querySelector("#task-input");
const taskList=document.querySelector("#task-list");


form.addEventListener("submit",function(e){
    e.preventDefault();

    if(input.value.trim()==="") return;
   
    const li=document.createElement("li");
    li.textContent=input.value;

    taskList.append(li);
    input.value="";
    // console.log(li);
})

// input.addEventListener("input",function(e){
//     console.log(e.target.value)
// })


input.addEventListener("keydown",function(e){
   if(e.key==="Enter"){
    console.log("Enter is pressed");
   }

   if(e.key==="Escape"){
    console.log("Escaped key pressed");
   }
})

// console.log(form);
// console.log(input);
// console.log(taskList)