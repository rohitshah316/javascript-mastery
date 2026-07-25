export function createTask(title,priority="Medium",dueDate=""){
    return {
        id:crypto.randomUUID(),
        title,
        completed:false,
        priority,
        dueDate,
        createdAt: new Date().toISOString()
    }
}