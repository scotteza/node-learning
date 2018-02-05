const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
const title = argv.title;
const body = argv.body;
const command = argv._[0];

switch (command) {
  case "add": {
    const addedNote = notes.addNote(title, body);
    if (addedNote) {
      console.log("Note added");
      notes.logNote(addedNote);
    } else {
      console.log("Note title already in use");
    }
    break;
  }
  case "list": {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
    break;
  }
  case "read": {
    const note = notes.read(title);
    if (note) {
      notes.logNote(note);
    } else {
      console.log("Note not found");
    }
    break;
  }
  case "remove": {
    const removed = notes.remove(title);
    console.log(
      removed ? `Success: removed ${title}` : `Error: ${title} not found`
    );
    break;
  }
  default: {
    console.log("Command not recognized");
    break;
  }
}
