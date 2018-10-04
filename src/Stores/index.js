import axios from "axios"

import TodoStore from "./TodoStore";

class RootStore {
  constructor() {
    axios.defaults.baseURL = "http://demo1502681.mockable.io/"
    this.todo = new TodoStore(this);
  }
}

const store = new RootStore();
export default store;