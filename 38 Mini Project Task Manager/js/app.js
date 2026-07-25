import { FilterModule } from "./modules/filterModule.js";
import { TaskModule } from "./modules/taskModule.js";
import { sortStrategies } from "./strategies/sortStrategies.js";
import { setupEvents } from "./ui/events.js";
import { renderTasks } from "./ui/render.js";
import { TaskView } from "./ui/taskView.js";



function updateUI(tasks){
    let result =tasks;

    result=FilterModule.byStatus(result,TaskView.status)
    result=FilterModule.byPriority(result,TaskView.priority)
    result=sortStrategies[TaskView.sort](result);


    renderTasks(result)
}

TaskModule.subscribe(updateUI)
renderTasks(TaskModule.getTasks())
setupEvents()


  