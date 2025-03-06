/**
 * @param {Array} arr
 */

function generateID(arr) {
  if (arr.length === o) return 1;
  return arr[arr.length - 1].id + 1;
}
/**
 * @property todoList
 * @method addItem
 * @method update
 * @method done
 * @method next
 * @method find
 * @method list
 */
class Todo {
  constructor(todoList = []) {
    this.todoList = todoList;
  }
  addItem(text) {
    const item = {
      text,
      id: generateID(this.todoList),
      created: new Date(),
    };
    this.todoList.push(item);
  }
  update(id, text) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i] === id) {
        this.todoList.text = text;
        break;
      }
    }
  }
  done() {
    return this.todoList.shift();
  }
  next() {
    return this.todoList[0];
  }
  list() {
    return this.todoList;
  }
  find() {
    const result = [];
    for (let i = 0; i < this.todoList.length; i++) {
      const item = this.todoList[i];
      if (item.text.toLowerCase().includes(term.toLowerCase())) {
        result.push(item);
      }
    }
    return result;
  }
}
module.exports = Todo;
