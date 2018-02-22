const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes.js");

// Set up yargs
const titleArg = {
  describe: "The title of the note",
  demand: true,
  alias: "t",
  type: "string"
};
const bodyArg = {
  describe: "The body of the note",
  demand: true,
  alias: "b",
  type: "string"
};
const argv = yargs
  .command("add", "Add a new note", {
    title: titleArg,
    body: bodyArg
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleArg
  })
  .command("remove", "Remove a note", {
    title: titleArg
  })
  .help().argv;

// Read yargs
const title = argv.title;
const body = argv.body;
const command = argv._[0];

// Execute command
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
