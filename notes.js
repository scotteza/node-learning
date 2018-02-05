const addNote = (title, body) => {
  console.log("Adding note", title, body);
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
