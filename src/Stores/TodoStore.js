import { observable, action } from "mobx"
import axios from "axios"

export default class TodoStore {
  @observable todos
  
  constructor() {
    axios.get('get-todos').then((response) => {
      this.todos = response.data
    })
  }

  @action addItem = (todoItem) => {
    const index = this.todos.length + 1,
          value = todoItem.newItemValue,
          done = false
    this.todos.unshift({ index,  value,  done });
    axios.post('add-todo', { index, value, done })
  }

  @action removeItem = (index) => {
    this.todos.splice(index, 1);
    axios.post('remove-todo', { index })
  }

  @action markTodoDone = (index) => {
    var todo = this.todos[index];
    this.todos.splice(index, 1);
    todo.done = !todo.done;
    this.todos.splice(index, 0, todo);
    axios.post('check-todo', { index, done: todo.done })
  }

  @action editTodo = (index, value) => {
    var todo = this.todos[index];
    this.todos.splice(index, 1);
    todo.value = value;
    this.todos.splice(index, 0, todo);
    axios.post('edit-todo', { index, value })
  }
}