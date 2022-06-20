// video.9=importing node js core modules

/*
fs.writeFileSync=>create a file and add text to it.
*/
// const fs = require("fs");
// fs.writeFileSync("notes.txt", "My name is Swapneel .");

//#challenge:
/*
fs.appendFileSync=>add text to the same file.
*/
// fs.appendFileSync("notes.txt", "And i m a React-developer.");

// video.10= importing own files.

// const { fname, lname, add } = require("./utils");

// console.log(fname + " " + lname);

// console.log(add(2, 3));

const notes = require("./notes"); //loading files .
const chalk = require("chalk");

console.log(chalk.blue(notes.getNotes()));

//video.11= importing npm modules

// "npm init" => used to initialize npm in command line ,creates a package.json and package-lock.json in the directory.

// const validator = require("validator");
// console.log(validator.isEmail("swapneel@gmail.co.in"));
// console.log(validator.isURL("swapneel"));

//video.12= printing colors

// const chalk = require("chalk");

// const greenMsg = chalk.green("Welcome to the swapneel project");
// const redMsg = chalk.red("Exit not allowed");
// console.log(greenMsg, redMsg);

const yargs = require("yargs");

// add,remove,read,list

yargs.command({
  command: "add",
  description: "Add a note",
  builder: {
    title: {
      description: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "add note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      description: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "read",
  description: "read a note",
  builder: {
    title: {
      description: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "List a note",
  handler: () => {
    notes.displayNotes();
  },
});

yargs.parse();
