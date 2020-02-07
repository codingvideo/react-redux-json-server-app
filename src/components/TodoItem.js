import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toRemoveTodo } from '../actions';

class TodoItem extends Component {

  handleClick(evt){
    this.props.removeTodo({ id: this.props.id });
  }

  render(){
    return (
      <li className="todo-list"  onClick={ (evt)=>this.handleClick(evt) }>
        <span className="text">{ this.props.val }</span>
      </li>
    );
  }
}


const mapDispatchToProps = {
  removeTodo: toRemoveTodo
};

TodoItem = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItem;
