import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { selectTodos } from '../reducers/todos.js';
import { toGetTodos } from '../actions';

class TodoList extends Component {

  componentDidMount(){
    this.props.dispatchToGetTodos()
  }

  render() {
    return (
      <ul className="todo-list">
        { this.props.todos.map((item) =>
          <TodoItem key={ item.id } val={ item.val } id={ item.id } />
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: selectTodos(state.todos, ownProps.filter)
});

const mapDispatchToProps = {
  dispatchToGetTodos: toGetTodos
};

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
