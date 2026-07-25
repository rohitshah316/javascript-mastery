import { TaskModule } from "../modules/taskModule.js";

export function setupEvents(){
    
    const taskInput=document.getElementById("taskInput");

    const priorityInput=document.getElementById("priorityInput");

    const dateInput=document.getElementById("dateInput");

    const addTaskBtn=document.getElementById("addTaskBtn");

    const taskList=document.getElementById("taskList");

    taskList.addEventListener("click",function(e){
            const li=e.target.parentElement;

            const id=li.dataset.id;

        if(e.target.textContent==="Delete"){
           

            TaskModule.deleteTask(id)
        }
        if(e.target.textContent==="Done"){
            TaskModule.toggleTask(id)
        }

      
    })


    addTaskBtn.addEventListener("click",()=>{
        const title=taskInput.value.trim();
        const priority=priorityInput.value;
        const dueDate=dateInput.value;

        if(title==="") return;

        TaskModule.addTask(
            title,
            priority,
            dueDate
        )

        taskInput.value="";
    })
}