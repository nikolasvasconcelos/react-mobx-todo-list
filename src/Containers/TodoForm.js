import { inject } from "mobx-react"
import TodoListForm from "../Components/TodoListForm"

export default inject(({ store }) => ({
  add: store.todo.addItem,
}))(TodoListForm);