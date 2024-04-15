// Retrieve saved notes from LocalStorage
const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

// Display saved notes on page load or refresh
function displayNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';

    savedNotes.forEach((note) => {
        const noteElement = document.createElement('div');
        noteElement.textContent = note.content;
        notesContainer.appendChild(noteElement);
    });
}

// Save a new note or update an existing note
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

// Edit a note
function editNote() {
    // Code to replace note text with an input field or textarea for editing
}

// Delete a note
function deleteNote() {
    // Code to remove the note from savedNotes and update LocalStorage
}

// Event listeners for buttons
document.getElementById('save-button').addEventListener('click', saveNote);
document.getElementById('edit-button').addEventListener('click', editNote);
document.getElementById('delete-button').addEventListener('click', deleteNote);

// Display saved notes on page load or refresh
displayNotes();