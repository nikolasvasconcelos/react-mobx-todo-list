import React from 'react';
import { observer } from "mobx-react"
import TodoListItem from './TodoListItem';

@observer class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render () {
    const { items } = this.props
    return (
      <ul className="list-group">
        {
          items && items.map((item, index) => (
              <TodoListItem key={index} item={item} index={index} edit={this.props.edit} removeItem={this.props.remove} check={this.props.check} />
            )
          )
        } 
      </ul>
    );
  }
}

export default TodoList