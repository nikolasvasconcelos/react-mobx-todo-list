import { inject } from "mobx-react"
import TodoListComponent from "../Components/TodoList"

export default inject(({ store }) => ({
  remove: store.todo.removeItem,
  check: store.todo.markTodoDone,
  items: store.todo.todos,
  edit: store.todo.editTodo
}))(TodoListComponent);