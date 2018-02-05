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
    console.log("--");
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
  } else {
    console.log("Note title already in use");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.read(title);
} else if (command === "remove") {
  notes.remove(title);
} else {
  console.log("Command not recognized");
}
