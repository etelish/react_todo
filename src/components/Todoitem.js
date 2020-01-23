import React, { Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ComponentName
 */
export class TodoItem extends Component { // eslint-disable-line react/prefer-stateless-function
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
     'line-through' : 'none'
    }
  }

  markComplete = (e) => {

  }
  render() {
    return (
      <div style={this.getStyle()}>
      <p>
      <input type="checkbox" onChange={this.markComplete} />{' '}
      {this.props.todo.title}
      </p>
      </div>
    );
  }
}

//propTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}



export default TodoItem;
