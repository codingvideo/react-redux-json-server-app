import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toPostTodo } from '../actions';

class TodoForm extends Component {

  constructor(){
    super();
    this.state = { val: '' };
  }

  handleKeyPress(evt){

    if(evt.key==='Enter'){
      const newTodo = {
        id: this.props.todos.length+1,
        val: this.state.val
      };
      this.props.dispatchToPostTodo(newTodo);
      this.setState({ val: '' });
    }
  }

  handleChange(evt){
    this.setState({ val: evt.target.value });
  }

  render() {
    return (
      <div className="todo-form">
        <input type="text"
          value={this.state.val}
          onKeyPress={evt=>this.handleKeyPress(evt)}
          onChange={evt=>this.handleChange(evt)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  dispatchToPostTodo: toPostTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
