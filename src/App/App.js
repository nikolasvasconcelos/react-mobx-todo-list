import React from 'react';
import { observer, Provider } from "mobx-react"
import createBrowserHistory from 'history/createBrowserHistory'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Router } from 'react-router'

import RootStore from '../Stores'
import RootNavigator from "./RootNavigator"

import TodoHeader from '../Components/Header'
import TodoList from '../Containers/TodoList'
import TodoForm from '../Containers/TodoForm'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)

const store = RootStore

@observer class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {todoItems: this.props.initItems};
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <TodoHeader />
            <RootNavigator />
            <TodoForm  />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default TodoApp