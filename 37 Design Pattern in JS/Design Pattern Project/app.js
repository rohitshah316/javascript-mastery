const NotesModule=(function (){
    let notes=[]; //private

    //public method
    function addNote(note){
        notes.push(note);
    }

    //public method
    function getNotes(){
        return notes;
    }

    //expose only these methods
    return {
        addNote,getNotes
    }
})();



const noteInput=document.getElementById("noteInput");
const addBtn=document.getElementById("addBtn");
const noteList=document.getElementById("noteList");

function renderNotes(){
    //clear existing list
    noteList.innerHTML="";

    //get all notes from the module
    const notes=NotesModule.getNotes();

    //display each note
    notes.forEach(function (note){
        const li=document.createElement("li");
        li.textContent=note;
        noteList.appendChild(li)
    })
}