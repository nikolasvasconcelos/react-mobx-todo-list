import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TodoListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: parseInt(this.props.index),
      editing: false,
      value: this.props.item.value
    }
  }
  onClose = () => this.props.removeItem(this.state.index)

  onDone = () => this.props.check(this.state.index)

  onEdit = () => {
    const { editing, value, index } = this.state
    editing && this.props.edit(index, value)
    this.setState(prevState => ({ editing: !prevState.editing, value}))
  }

  changeValue = (e) => this.setState({value: e.target.value})

  render () {
    const { item } = this.props
    const { editing, value } = this.state

    const todoClass = item.done ? "text-success" : "text-info";
    const iconClass = item.done ? "text-success" : "text-info";

    return(
      <li className="list-group-item d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon className={iconClass} onClick={this.onDone} icon="check-square" />
          {
            (
              editing && 
              <input type="text" value={value} onChange={this.changeValue}
                className="border-bottom border-top-0 border-right-0 border-left-0 border-bottom-dark 
                rounded-0 bg-transparent ml-2"
              />
            ) || <span className={"ml-2 " + todoClass}>{item.value}</span>
          }
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon className="mr-1 text-secondary" onClick={this.onEdit} icon="pen" />
          <FontAwesomeIcon className="text-secondary" onClick={this.onClose} icon="times" />
        </div>
      </li>
    );
  }
}