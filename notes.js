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
  let notes = fetchNotes();
  notes = notes.filter(note => note.title === title);
  return notes[0];
};

const remove = title => {
  let notes = fetchNotes();
  const filtered = notes.filter(note => note.title !== title);
  if (notes.length !== filtered.length) {
    saveNotes(filtered);
    return true;
  }
  return false;
};

const logNote = note => {
  debugger;
  console.log("--------------------");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  read,
  remove,
  logNote
};
