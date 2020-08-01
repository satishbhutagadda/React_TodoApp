import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.title){
            return;
        }
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add Todo..."
                 style={{flex: '10', padding: '5px'}} value={this.state.title} onChange={this.onChange}/>
                <button type="submit" style={submitBtnStyle} >Submit</button>
            </form>
        )
    }
}

const submitBtnStyle = {
    flex: '1',
    background: '#282c34',
    color: '#fff',
    border: '1px solid #6f6f6f',
    cursor: 'pointer'
}

// Prop Types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
