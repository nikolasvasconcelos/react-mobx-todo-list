import React from "react";
import { Switch, Route } from "react-router-dom";

import TodoList from "../Containers/TodoList"

const RootNavigator = () => (
  <main>
    <Switch>
        <Route exact path='/' component={TodoList}/>
        <Route exact path='/done' component={TodoList}/>
        <Route exact path='/pending' component={TodoList}/>
    </Switch>
  </main>
);

export default RootNavigator;