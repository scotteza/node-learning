const fs = require("fs");
const fn = "notes-data.json";

const addNote = (title, body) => {
  let notes = [];
  var note = { title, body };

  try {
    const notesString = fs.readFileSync(fn);
    notes = JSON.parse(notesString);
  } catch (e) {}

  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync(fn, JSON.stringify(notes));
  } else {
    console.log("Not adding duplicate note");
  }
};

const getAll = () => {
  console.log("Getting all notes");
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
