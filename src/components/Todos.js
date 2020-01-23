import React, { Component } from "react";
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// function Todos() {
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id}  todo={todo} />
    ));
  }
}

//propTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
  
