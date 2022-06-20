const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return "Your notes";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatenotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicatenotes.length === 0 && notes.title.length > 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green("Added notes successfully"));
  } else {
    console.log(chalk.red("Note title already added"));
  }
};
const saveNotes = (notes) => {
  const datajson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", datajson);
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json", "utf8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
  } catch (err) {
    return [];
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  // console.log(notesToKeep);
  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green("Notes deleted successfully"));
  } else {
    console.log(chalk.red("Notes not found"));
  }
};

const displayNotes = () => {
  const notes = loadNotes();

  notes.map((note) => {
    console.log(chalk.yellow(`(Title: ${note.title} , Body: ${note.body}) \n`));
  });
  // console.log(chalk.yellow(list));
};
const readNote = (title) => {
  const notes = loadNotes();
  const noteRead = notes.find((note) => {
    if (note.title === title) {
      return note.body;
    }
  });
  if (noteRead) {
    console.log(chalk.green.inverse(noteRead.body));
  } else {
    console.log(chalk.red("note not found"));
  }
};
module.exports = { getNotes, addNote, removeNote, displayNotes, readNote };
