import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    setTodoStyles = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const {id, title, completed} = this.props.todo
        return (
            <div style={this.setTodoStyles()}>
                <label>
                    <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} style={{marginRight: '6px'}}/>
                    {title}
                </label>
                <button style={deleteBtnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
            </div>
        )
    }
}

// Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

const deleteBtnStyle = {
    background: '#ff0000',
    color: '#fff',
    outline: 'none',
    padding: '6px 9px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}
export default TodoItem
