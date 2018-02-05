const fs = require("fs");
const fn = "notes-data.json";

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync(fn);
    const notes = JSON.parse(notesString);
    return notes;
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync(fn, JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  var note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const read = title => {
  console.log("Getting note", title);
};

const remove = title => {
  console.log("Removing note", title);
};

module.exports = {
  addNote,
  getAll,
  read,
  remove
};
