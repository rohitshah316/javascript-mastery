import { createTask } from "../models/taskFactory.js";
import { StorageModule } from "./storageModule.js";

export const TaskModule=(function(){
    let tasks=StorageModule.load();
    const observers=[];

    function subscribe(observer){
        observers.push(observer)

        observer(tasks)
    }

    function notify(){
        
        observers.forEach(observer => {
            observer(tasks);
        });
        StorageModule.save(tasks)
    }

    function addTask(title,priority,dueDate){
        const task=createTask(
            title,
            priority,
            dueDate
        );

        tasks.push(task);
        notify()
        return task;
    }

    function getTasks(){
        return tasks;
    }

    function deleteTask(id){
        tasks=tasks.filter(function(task){
            return task.id!==id;
        })

        notify()
    }

    function toggleTask(id){
        const task=tasks.find(function(task){
            return task.id=id;
        })

        if(task){
            task.completed=!task.completed;
        }

        notify()
    }
    return {
        addTask,
        getTasks,
        subscribe,
        deleteTask,
        toggleTask
    }
})();


//this is module pattern