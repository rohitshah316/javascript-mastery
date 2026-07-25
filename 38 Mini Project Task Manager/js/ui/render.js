export function renderTasks(tasks){
    const taskList=document.getElementById("taskList");


    taskList.innerHTML="";


    tasks.forEach(task => {
        const li=document.createElement("li");


        li.dataset.id=task.id;

        if(task.completed){
            li.classList.add("completed");
        }
        const title=document.createElement("span");

        title.textContent=`${task.title} - ${task.priority} `;

        const deleteBtn=document.createElement("button");

        deleteBtn.textContent="Delete";

        const completeBtn=document.createElement("button");
        completeBtn.textContent="Done"

        li.appendChild(title);
        li.appendChild(deleteBtn);
        li.appendChild(completeBtn)

        taskList.appendChild(li)

        
    });
}