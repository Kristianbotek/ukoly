
const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];


function displayNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';

    savedNotes.forEach((note) => {
        const noteElement = document.createElement('div');
        noteElement.textContent = note.content;
        notesContainer.appendChild(noteElement);
    });
}


function saveNote() {
    const noteContent = document.getElementById('note-input').value;
    const currentDate = new Date();

    const note = {
        content: noteContent,
        timestamp: currentDate.toISOString(),
    };

    savedNotes.push(note);
    localStorage.setItem('notes', JSON.stringify(savedNotes));

    displayNotes();
}


function editNote() {
    
}
function deleteNote() {

}

document.getElementById('save-button').addEventListener('click', saveNote);
document.getElementById('edit-button').addEventListener('click', editNote);
document.getElementById('delete-button').addEventListener('click', deleteNote);

displayNotes();