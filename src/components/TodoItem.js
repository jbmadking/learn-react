import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <h4>{this.props.todo.title}</h4>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
