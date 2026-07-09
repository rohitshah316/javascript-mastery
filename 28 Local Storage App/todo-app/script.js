

const input=document.getElementById("task");
const addTask=document.getElementById("add");
const taskList=document.getElementById("taskList");

let tasks=[];

function saveTasks(){
    localStorage.setItem("todos",JSON.stringify(tasks))
}

function loadTasks(){
   const savedTasks= localStorage.getItem("todos")

    if(savedTasks){
        tasks=JSON.parse(savedTasks)
    }
}


function createTaskElement(task){
    const li=document.createElement("li");
    const button=document.createElement("button");
    li.textContent=task;
    button.textContent="Delete";

    li.appendChild(button);

    button.addEventListener("click",()=>{
        tasks.splice(tasks.indexOf(task),1)
                li.remove()

        saveTasks()
    })


    return li;
}

function displayTasks(){
    taskList.innerHTML=""
    tasks.forEach(task=>{
        const li=createTaskElement(task);
        taskList.appendChild(li)
    })
}
addTask.addEventListener("click",()=>{


    if(input.value.trim()){
const task=input.value.trim();

 tasks.push(task)
    const li=createTaskElement(task);
    taskList.appendChild(li)
    input.value=""

   
saveTasks()

    
    }
})

loadTasks()

displayTasks()