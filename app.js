const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
const title = argv.title;
const body = argv.body;
const command = argv._[0];

if (command === "add") {
  const addedNote = notes.addNote(title, body);
  if (addedNote) {
    console.log("Note added");
    notes.logNote(addedNote);
  } else {
    console.log("Note title already in use");
  }
} else if (command === "list") {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
  const note = notes.read(title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  const removed = notes.remove(title);
  console.log(
    removed ? `Success: removed ${title}` : `Error: ${title} not found`
  );
} else {
  console.log("Command not recognized");
}
