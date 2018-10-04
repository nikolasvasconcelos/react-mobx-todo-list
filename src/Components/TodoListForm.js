import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }

  onSubmit = (event) => {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.add({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline d-flex mt-3">
        <input type="text" ref="itemName" className="form-control flex-fill ml-0 mr-3" placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-primary flex-fill">Add</button> 
      </form>
    );   
  }
}