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

  switch (baseCommand[0]) {
    case ADD: {
      todo.addItem(argv.text);
      console.log("Todo Added");
      saveFile(todo.todoList, filePath);
      break;
    }
    case UPDATE: {
      todo.update(argev.id, argv.text);
      console.log("Todo Updated");
      saveFile(todo.todoList, filePath);
      break;
    }
    case NEXT: {
      const item = todo.next();
      console.log(`${item.id}:${item.text} [${item.created}]`);
      break;
    }
    case DONE: {
      todo.done();
      console.log("One Item Completed");
      saveFile(todo.todoList, filePath);
    }
    case FIND: {
      const items = todo.find(argv.term);
      if (items.length === 0) {
        console.log("No Item Found");
        break;
      }
      for (let i = 0; i < items.length; i++) {
        console.log(`${items[i].id}:${items[i].text} [${items[i].created}]`);
      }
      break;
    }
    case LIST: {
      if (todo.todoList.length === 0) {
        console.log("Empty List");
        break;
      }
      for (let i = 0; i < todo.todoList.length; i++) {
        console.log(
          `${todo.todoList[i].id}:${todo.todoList[i].text} [${todo.todoList[i].created}]`
        );
      }
      break;
    }
    default:
      throw new Error("Command Not Found");
  }
})();
