//strategy pattern
const sortStrategies={
    alphabetical(notes){
        return [...notes].sort((a,b)=>{
            return a.text.localeCompare(b.text);
        })
    },
    newest(notes){
        return [...notes].sort((a,b)=>{
         return   b.id-a.id
        })
    },
    oldest(notes){
        return [...notes].sort((a,b)=>{
           return a.id-b.id
        })
    }
}

let currentStrategy=sortStrategies.alphabetical;

//factory pattern
function createNote(text){
    return {
        id: Date.now(),
        text:text,
        completed:false,
    }
}

const NotesModule=(function (){
    let notes=[]; //private
    const observers=[];

    function notify(){
        observers.forEach(function (observer){
            observer();
        })
    }

    function subscribe(observer){
        observers.push(observer)
    }

    //public method
    // function addNote(note){
    //     notes.push(note);
    // }

    function addNote(text){
        const note=createNote(text);
        notes.push(note);
        notify();
    }
    //public method
    function getNotes(){
        return notes;
    }

    //expose only these methods
    return {
        addNote,getNotes,subscribe
    }
})();



const noteInput=document.getElementById("noteInput");
const addBtn=document.getElementById("addBtn");
const noteList=document.getElementById("noteList");

function renderNotes(){
    //clear existing list
    noteList.innerHTML="";

    //get all notes from the module
    const notes=currentStrategy(
        NotesModule.getNotes()
    );

    //display each note
    notes.forEach(function (note){
        const li=document.createElement("li");
        li.textContent=note.text;
        noteList.appendChild(li)
    })
}

NotesModule.subscribe(renderNotes)

addBtn.addEventListener("click",function(){
    const note=noteInput.value.trim();

    if(note==="") return;

    NotesModule.addNote(note);
    

    noteInput.value="";
})