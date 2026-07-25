

export const FilterModule={
    byStatus(tasks,status){

        if(status==="all") return tasks;

        if(status==="completed"){
            return tasks.filter(function(task){
                return task.completed
            })
        }

        if(status==="pending"){
            return tasks.filter(function(task){
                return !task.completed;
            })
        }
    },

    byPriority(tasks,priority){
        if(priority==="all") return tasks;

        return tasks.filter(function (task){
            return task.priority===priority
        })
    }
}