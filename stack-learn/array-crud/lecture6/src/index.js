const { argv } = require("yargs");
const path = require("path");
const Todo = require("./Todo");
const { saveFile, readFile } = require("./utils");
const { ADD, UPDATE, NEXT, DONE, FIND, LIST } = require("./command");

const finleName = "../data.json";
const filePath = path.resolve(__dirname, finleName);

(function init() {
  const data = readFile(filePath) || [];
  const todo = new Todo(data);
  const { _: baseCommand } = argv;
  console.log(argv);
})();
