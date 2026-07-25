const STORAGE_KEY="taskflow_tasks";


export const StorageModule={
    save(tasks){
        localStorage.setItem(STORAGE_KEY,JSON.stringify(tasks));
    },

    load(){
        const data=localStorage.getItem(STORAGE_KEY)

        return data?JSON.parse(data):[];
    },

    clear(){
        localStorage.removeItem(STORAGE_KEY)
    }
}