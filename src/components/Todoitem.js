import React, { Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ComponentName
 */
export class TodoItem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

//propTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


export default TodoItem;
