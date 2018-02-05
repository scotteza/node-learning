// const obj = {
//   name: "Scott"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name":"Scott", "Age": "31"}';
// const personObject = JSON.parse(personString);
// console.log(typeof personObject);
// console.log(personObject);

const fs = require("fs");

const originalNote = {
  title: "Some title",
  body: "Some body"
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

const noteString = fs.readFileSync("notes.json");
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
